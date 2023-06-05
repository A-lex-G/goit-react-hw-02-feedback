import PropTypes from 'prop-types'
import css from './Section.module.css'

export const Section = ({ children, title }) => {
    return (
        <>
            <section className={css.section}>
                <h1>{title}</h1>
                {children}
            </section>
        </>
    )
}

Section.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
}