#include <windows.h>
#include <wincrypt.h>

void DeriveKey(BYTE* password, DWORD passwordSize, BYTE* salt, DWORD saltSize, BYTE* output, DWORD outputSize) {
    HCRYPTPROV hProv;
    CryptAcquireContextA(&hProv, NULL, NULL, PROV_RSA_AES, CRYPT_VERIFYCONTEXT);
    
    HCRYPTHASH hHash;
    CryptCreateHash(hProv, CALG_SHA_256, 0, 0, &hHash);
    CryptHashData(hHash, password, passwordSize, 0);
    CryptHashData(hHash, salt, saltSize, 0);
    CryptGetHashParam(hHash, HP_HASHVAL, output, &outputSize, 0);
    
    CryptDestroyHash(hHash);
    CryptReleaseContext(hProv, 0);
}
