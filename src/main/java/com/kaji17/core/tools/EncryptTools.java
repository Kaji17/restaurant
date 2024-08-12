package com.kaji17.core.tools;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class EncryptTools {
	// Define the BCrypt workload to use when generating password hashes. 10-31 is a valid value.
	private static int workload = 12;

/*	public static void main(String[] args) {
		String encryptedMessage = hashPassword("password");
		System.out.println("Message chiffré: " + encryptedMessage);

	}*/

	public String hashPassword(String password) {
		String salt = BCrypt.gensalt(workload);
		String hashed_password = BCrypt.hashpw(password, salt);
		return hashed_password;
	}


	public boolean checkPassword(String password, String stored_hash) {
		boolean password_verified = false;

		if(null == stored_hash || !stored_hash.startsWith("$2a$"))
			throw new IllegalArgumentException("Invalid hash provided for comparison");

		password_verified = BCrypt.checkpw(password, stored_hash);

		//return true ou false
		return password_verified;
	}
}
