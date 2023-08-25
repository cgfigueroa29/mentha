import './testimonials.css'

export default function Testimonials(props) {
    return (
        <>
        <div className="container-testimonials">
            <img src={`./public/testimonio-${props.image}`} alt="mentha-logo" />
            <div className="container-text-testimonial">
                <p className="name-testimonial"><strong>{props.name}</strong> in {props.country}</p>
                <p className="cargo-testimonial">{props.cargo} works in {props.company}</p>
                <p className="text-testimonial">{props.testimonial}</p>
            </div>
        </div>
        </>
        

    )
}