import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {

    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: { 'image/jpeg': ['.jpeg', '.png'] },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    })

    return (
        <div>
            <div {...getRootProps()} style={dropzoneStyles}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop / click to select files</p>
            </div>
            <div
                style={{
                    border: '2px dashed #cccccc',
                    margin: 24,
                    alignItems: 'center',
                    backgroundColor: '#f8f8f8',
                    height:100,
                    padding:10,
                    flex:1,
                    flexDirection:'column'
                }}
            >
                {files && files.length > 0 &&
                    <img
                        style={{
                            width:100,
                            height: 100,
                            margin: 'auto',
                            background: '#999999',
                        }}
                        src={files[0].preview}
                        onLoad={() => { URL.revokeObjectURL(files[0].preview) }}
                        alt="uploaded file"
                    />
                }

            </div>

        </div>
    );
};

const dropzoneStyles = {
    border: '#cccccc',
    borderRadius: '4px',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#116611',
    color: '#ffffff',
    textAlign: 'center',
    cursor: 'pointer',
};

export default FileUpload;





