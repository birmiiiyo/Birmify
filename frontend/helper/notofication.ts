import { NotificationPlacement } from 'antd/lib/notification';
import { notification } from 'antd';

export const openNotification = (placement: NotificationPlacement, text: string) => {
  notification.info({
    message: `${text}`,
    placement,
  });
};
