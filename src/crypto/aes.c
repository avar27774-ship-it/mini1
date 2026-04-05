#include <windows.h>
#include <wincrypt.h>

void AESEncrypt(BYTE* data, DWORD size, BYTE* key, DWORD keySize) {
    HCRYPTPROV hProv;
    HCRYPTKEY hKey;
    
    CryptAcquireContextA(&hProv, NULL, NULL, PROV_RSA_AES, CRYPT_VERIFYCONTEXT);
    
    struct {
        BLOBHEADER hdr;
        DWORD keySize;
        BYTE keyBytes[32];
    } keyBlob;
    
    keyBlob.hdr.bType = PLAINTEXTKEYBLOB;
    keyBlob.hdr.bVersion = CUR_BLOB_VERSION;
    keyBlob.hdr.reserved = 0;
    keyBlob.hdr.aiKeyAlg = CALG_AES_256;
    keyBlob.keySize = 32;
    memcpy(keyBlob.keyBytes, key, 32);
    
    CryptImportKey(hProv, (BYTE*)&keyBlob, sizeof(keyBlob), 0, 0, &hKey);
    CryptEncrypt(hKey, 0, TRUE, 0, data, &size, size);
    
    CryptDestroyKey(hKey);
    CryptReleaseContext(hProv, 0);
  }
