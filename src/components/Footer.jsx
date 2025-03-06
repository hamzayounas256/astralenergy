import email from "../assets/email.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";

export default function Footer() {
	return (
		<footer className="bottom-0 w-full bg-orange-500 text-white p-4 flex flex-col md:flex-row items-center justify-between">
			<p className="flex items-center gap-2">
				<img src={email} className="w-6" alt="Email" />
				<span>astralenergy24@gmail.com</span>
			</p>
			<p className="flex items-center gap-2">
				<img src={phone} className="w-6" alt="Phone" />
				<span>0092-3327229966</span>
			</p>
			<p className="flex items-center gap-2 text-center">
				<img src={location} className="w-6" alt="Location" />
				<span>
					House no 22, Street no 152, Sector G-13/4, Islamabad Pakistan
				</span>
			</p>
		</footer>
	);
}
