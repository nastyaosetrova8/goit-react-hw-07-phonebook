
import PropTypes from 'prop-types';
import { SectionStyled } from './SectionStyled';


const Section = ({title, children}) => {
    return (
        <SectionStyled>
            {<h1>{title}</h1>}
            {children}
        </SectionStyled>
    )
    }
    
    Section.propTypes = {
        title: PropTypes.string,
        children: PropTypes.node.isRequired,
    }

    export default Section;
