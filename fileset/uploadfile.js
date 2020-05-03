import { jexiaClient, fileOperations, realTime } from "jexia-sdk-js/node";
import * as fs from "fs";

const jfs = fileOperations({
    uploadWaitForCompleted: true
});

jexiaClient().init({
    projectID: "90455dd3-42ba-4f10-8c9e-7a5799e383be",
    key: "8d574c40-a2ec-4e7d-9f09-ee944d1f3e74",
    secret: "arqfSojsVwWS2IsL0+1X/EvRSp+4kaU6o5CySAvWV4kZQKuQKdG4P+9Yg2MefgmsjNkJmx65qAk+mEXF2ctKtQ==",
}, jfs, realTime());

const fileset = jfs.fileset("testleon");

const records = [{
    data: {
        description: "juat a file"
    },
    file: fs.createReadStream(".../assets/logo.png")
}];

fileset.upload(records).subscribe(fileRecord => {
    console.log(fileRecord);
});