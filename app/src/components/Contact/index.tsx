import * as React from 'react';
import { Modal } from 'semantic-ui-react';
import Button from '../Button';
import FormContact from './FormContact';

interface ContactModalProps {
  button: boolean;
}

export default class Contact extends React.Component<ContactModalProps> {

  public render() {
    return (
      <Modal
        basic={true}
        size="small"
        style={{ height: '100vh', width: '100%' }}
        trigger={
          this.props.button
            ? <Button>Contact</Button>
            : <Button>Hire</Button>}
      >
        <FormContact />
      </Modal>
    );
  }
}
