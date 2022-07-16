const fingerprintSDKDownloadURL = "https://openfpcdn.io/fingerprintjs/v3";

export async function getFingerprint(sdkURL = fingerprintSDKDownloadURL) {
    const SDK = await import(sdkURL).catch(console.error);
    return await SDK.load();
}