import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './style.css'

function Popo(props) {
  return (
    <>
      {['left'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3" className='tituloPopover'>{`Descubra a Armação`}</Popover.Header>
              <Popover.Body className='corpoPopover'>
                    Que legal! Pela análise da nossa IA seu tipo de armação é <strong>{props.armacao}</strong>.
                    Venha testar essa armação no nosso filtro agora mesmo.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary" className='popoverTelaTesteIA'>Tipo Armação</Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default Popo;