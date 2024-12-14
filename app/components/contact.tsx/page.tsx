import Image from "next/image"
import './contact.scss';

export default function Contact() {
    return (
    <section className="min-h-screen flex justify-center items-center contact-area section-py-120">
       <div className="form">
            <h4>Chat to our team</h4>
            <p>Need help with something? want a demo? Get in touch <br />With ou friendly team and e'll get in touch within 2 hours</p>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="first name" />
                <input type="text" placeholder="last name" />
                <input type="text" placeholder="Job title" />
                <input type="email" placeholder="example@email.com" />
                <input type="tel" placeholder="+271 345 6789"/>
                <div>
                    <h5>Which one do you represent?</h5>
                    <div>
                       <div>IN</div>
                        <h4>I am an Induvidual</h4>
                        <p>I need to help for my self</p>
                    </div>
                    <div>
                    <div>CO</div>
                        <h4>I am a Conmpany</h4>
                        <p>I need to help for my/our business</p>
                    </div>
                    
                </div>
                <button>
                    Get in touch
                </button>
            </form>
       </div>

       <div className="image">

       </div>
    </section>
      
    )
}