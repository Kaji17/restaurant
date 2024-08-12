package com.kaji17.core.tools;

import com.kaji17.core.exceptions.BadRequestException;
import com.kaji17.core.exceptions.InternalServerException;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.Normalizer;
import java.util.Arrays;
import java.util.Objects;

@Component
@Slf4j
public class FileTools{


    public String createFile(MultipartFile file, String path, String fileName) {
        try {
            String ext = FilenameUtils.getExtension(file.getOriginalFilename());
            fileName = Normalizer.normalize(fileName, Normalizer.Form.NFD).replaceAll("[^\\p{ASCII}]", "");//Remplace tous les caractères unicode
            fileName = fileName.replaceAll("[^a-zA-Z0-9]", "");//Remplace tous les caractères # des chiffres et # des lettres
            fileName = fileName + "." + ext;
            String absoluteFilePath = path + fileName;
            Path rootLocation = Paths.get(path);
            Path destinationFile = rootLocation.resolve(
                            Paths.get(fileName))
                    .normalize().toAbsolutePath();
            InputStream inputStream = file.getInputStream();
            Files.copy(inputStream, destinationFile,
                    StandardCopyOption.REPLACE_EXISTING);
            log.info("fichier créer avec succès :: path={} :: fileName={} ",path, fileName);
            return absoluteFilePath;
        } catch (Exception e) {
            log.error("Erreur survenue au moment de créer un fichier :: path={} :: fileName={}; msgError={} ",path, fileName, e.getMessage());
            throw new InternalServerException("Une erreur est survenue");
        }
    }

    public Boolean deleteFile(String filePath) {
        try {
            File file = new File(filePath);
            log.info("fichier supprimer avec succès :: path={}",filePath);
            return Files.deleteIfExists(file.toPath());
        } catch (Exception e) {
            log.error("Erreur survenue au moment de supprimer un fichier :: filePath={}; msg={} ", filePath, e.getMessage());
            throw new InternalServerException("Une erreur est survenue");
        }
    }
}
