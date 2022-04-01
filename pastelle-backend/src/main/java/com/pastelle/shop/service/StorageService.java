package com.pastelle.shop.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.util.IOUtils;
import com.pastelle.shop.model.Product;
import javassist.bytecode.ByteArray;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.Objects;

@Service
@Slf4j
@RequiredArgsConstructor
public class StorageService {

    private static final String PRODUCT_IMAGE_PATH = "product/%d/image/%s%s";
    private final ProductService productService;
    private final ProductImageService productImageService;
    private final AmazonS3 s3Client;
    private long imageSequence = 0;

    @Value("${cloud.aws.bucket-name}")
    private String bucketName;

    public String uploadFile(MultipartFile multipartFile, int productId) {
        Product product = productService.getProduct(productId);
        File file = convertMultipartFileToIOFile(multipartFile);
        String fileName = generateFileName(Objects.requireNonNull(multipartFile.getOriginalFilename()), productId);
        s3Client.putObject(bucketName, fileName, file);
        productImageService.save(product, fileName);
        return fileName;
    }

    public ResponseEntity<byte[]> getImage(String imagePath) {
        S3Object s3Image = s3Client.getObject(bucketName, imagePath);
        byte[] imageBytes;
        try (InputStream is = s3Image.getObjectContent()){
            imageBytes = IOUtils.toByteArray(is);
        } catch (IOException e) {
            log.error("Could not convert S3 object to bytes, ", e);
            return ResponseEntity.notFound().build();
        }
        HttpHeaders headers = new HttpHeaders();
        String contentType = s3Image.getObjectMetadata().getContentType();
        headers.setContentType(MediaType.parseMediaType(contentType));
        return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
    }

    private String generateFileName(String originalFileName, int productId) {
        String imageId = System.currentTimeMillis() + "_" + imageSequence++;
        String extension = originalFileName.substring(originalFileName.lastIndexOf("."));
        return String.format(PRODUCT_IMAGE_PATH, productId, imageId, extension);
    }

    private File convertMultipartFileToIOFile(MultipartFile multipartFile) {
        File convertedFile = new File(Objects.requireNonNull(multipartFile.getOriginalFilename()));
        try (FileOutputStream fileOutputStream = new FileOutputStream(convertedFile)) {
            fileOutputStream.write(multipartFile.getBytes());
        } catch (IOException e) {
            log.error("Error converting file", e);
        }
        return convertedFile;
    }
}
