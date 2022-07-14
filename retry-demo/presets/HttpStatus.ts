export const HttpStatus = ["404", "500", "502", "503", "504"];

export function useHttpStatusRetry(httpStatus: string[] = HttpStatus) {
    return (response: Response, counter: number) => {
        return httpStatus.includes(response.status.toString());
    }
};