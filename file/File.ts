import {FileFlags} from "./FileFlags";

export default class UFile {
    public fileFlag: FileFlags = FileFlags.NIL;
    files: File[] = [];

    constructor(files?: File[], uFileOptions?) {
        this.init(files);
    }

    init(files?: File[]): UFile {
        if(files) { this.files = files; }
        return this;
    }

    getFileBase64(){
        //
    }

    sliceFile(){
        //
    }

    getHeaderFile(): File & {sizeOfMB: number} {
        const originFile = this.files?.[0];
       return {
           ...originFile,
           sizeOfMB: this.getFileSizeOfMB(originFile),
       };
    }

    addFile(file: File) {
        this.files.push(file);
    }

    getFileSizeOfMB(file: File): number {
        return file.size / 1024 / 1024;
    }
}

const ufile = new UFile();