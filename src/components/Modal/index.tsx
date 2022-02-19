import { StyleProp, Text, TouchableOpacity, ViewProps, ViewStyle } from "react-native";
import { Modal, Portal, Provider } from "react-native-paper";
import React, { Children, useEffect, useState } from 'react';

interface ModalProps extends ViewProps {
  shown: boolean;
  children?: any;
  showHandler?: (hide: boolean) => void;

}
const Dialog: React.FC<ModalProps> = ({
  children,
  shown,
  showHandler,
}) => {
  const [visible, setVisible] = useState(false);

  const hideModal = () => {
    if (showHandler !== undefined) {
      showHandler(false);
    }
  };

  useEffect(() => {
    setVisible(shown);
  }, [shown]);

  const containerStyle: StyleProp<ViewStyle> = {
    backgroundColor: "white",
    padding: 20,
    minHeight: 200,
    paddingTop: 40,
    paddingBottom: 40,
  };

  return (
    <>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={() => hideModal()}
            contentContainerStyle={containerStyle}
          >
            {children}
          </Modal>
        </Portal>
      </Provider>
    </>
  );
};

export default Dialog;
