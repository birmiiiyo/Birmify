import React, { useRef, useState } from 'react';

import { CheckCircleOutlined, DownloadOutlined } from '@ant-design/icons';

import styles from '../../styles/FileUpload.module.scss';

interface FileUploadProps {
  setFile: Function;
  accept: string;
  children: React.ReactNode;
}

const FileUpload: React.FC<FileUploadProps> = ({ setFile, accept, children }) => {
  const [install, setInstall] = useState<boolean>(false);
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setFile(e.target.files[0]);
      setInstall(true);
    }
  };

  return (
    <div onClick={() => ref.current?.click()} className={styles.block}>
      <input
        type="file"
        accept={accept}
        style={{ display: 'none' }}
        ref={ref}
        onChange={onChange}
      />
      <div>
        <h3>{children}</h3>
        {install ? <CheckCircleOutlined /> : <DownloadOutlined />}
      </div>
    </div>
  );
};

export default FileUpload;
