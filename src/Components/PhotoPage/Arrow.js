import React, {useState, useEffect} from 'react';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';

// const ArrowContainer = ({ className, id, onClick, children}) => (
//     <div className={className} id={id} onClick={onClick}>
//         {children}
//     </div>
// );

// const StyledArrow = styled(ArrowContainer)`
//     position: fixed;
//     background-color: rgba(0, 0, 0, 0.438);
//     padding: 20px;
//     font: bold 2.5rem 'segoe';
//     top: 50%;
//     left: ${props => props.id === 'left' ? '10px' : null};
//     right: ${props => props.id === 'right' ? '10px' : null};

//     &:hover {
//         cursor: pointer;
//     }
// `;

// const StyledArrowSpan = styled.span`
//     display: inline-block;
//     width: 100%;
// `;

const Arrow = (props) => {
    const [verticalPosition, setVerticalPosition] = useState(window.innerHeight / 2);

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            setVerticalPosition(window.innerHeight / 2);
        });
    }, []);

    return (
        <Button
             id={props.id}
             className="arrow"
             style={{top: `${verticalPosition}px`}}
             onClick={(e) => props.changeImage(props.id)}
             color="primary"
             variant="contained" >
            <span>{props.value}</span>
        </Button>
    );
};

export default Arrow;