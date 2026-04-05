#include <windows.h>
#include <wincrypt.h>

void RSAEncrypt(BYTE* data, DWORD size, BYTE* publicKey) {
    HCRYPTPROV hProv;
    HCRYPTKEY hKey;
    
    CryptAcquireContextA(&hProv, NULL, NULL, PROV_RSA_FULL, CRYPT_VERIFYCONTEXT);
    CryptImportKey(hProv, publicKey, sizeof(publicKey), 0, 0, &hKey);
    CryptEncrypt(hKey, 0, TRUE, 0, data, &size, size);
    
    CryptDestroyKey(hKey);
    CryptReleaseContext(hProv, 0);
}
