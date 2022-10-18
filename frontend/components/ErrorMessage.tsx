import React, { FC } from 'react';

import { Typography } from 'antd';

const { Text } = Typography;

interface ErrorProps {
  children: React.ReactNode;
}

export const ErrorMessage: FC<ErrorProps> = ({ children }) => {
  return <Text type="warning">{children}</Text>;
};
