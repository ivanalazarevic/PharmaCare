import { cn } from "@/lib/utils";

function AboutUs() {
    return (
        <div className={cn('flex flex-col w-full gap-5')}>
            <div className={'flex flex-row justify-between'}>
                <h1 className={'text-4xl font-bold'}>About Us</h1>
            </div>
            <div className={'space-y-5'}>
                <p>
                    Welcome to <strong>PharmaCare</strong>! We are dedicated to providing a seamless experience that meets your needs, whether you're a new user or an experienced professional.
                </p>
                <p>
                    <strong>Version:</strong> 1.0.0
                </p>
                <p>
                    <strong>Who We Are:</strong> This application was developed by a passionate team of developers and designers who believe in creating tools that make your daily tasks easier and more enjoyable. We focus on user-friendly design, innovation, and reliability to provide the best possible experience.
                </p>
                <p>
                    Our goal is to continuously improve, driven by user feedback and a commitment to excellence. We hope you enjoy using our application as much as we enjoyed building it for you!
                </p>
                <p>
                    If you have any questions or suggestions, feel free to reach out to us. We’re always here to help.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
