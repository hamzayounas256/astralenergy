import React, { useState } from "react";

export default function Contact() {
	document.title = "AES | Contact us";

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		projectDetails: "",
		consultingNeeds: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log("Form submitted:", formData);
		// Reset form after submission
		setFormData({
			name: "",
			email: "",
			company: "",
			projectDetails: "",
			consultingNeeds: "",
		});
		// You can add success message or redirect logic here
	};

	return (
		<div className="pt-30 pb-8 md:py-32 container mx-auto px-4 max-w-6xl">
			<h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
				Contact Us
			</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Left Column - Contact Form */}
				<div className="bg-white shadow-md rounded-lg p-6">
					<h2 className="text-2xl font-semibold mb-4">
						Consultation Request Form
					</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label
								htmlFor="name"
								className="block text-gray-700 font-medium mb-2"
							>
								Name <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-gray-700 font-medium mb-2"
							>
								Email <span className="text-red-500">*</span>
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="company"
								className="block text-gray-700 font-medium mb-2"
							>
								Company
							</label>
							<input
								type="text"
								id="company"
								name="company"
								value={formData.company}
								onChange={handleChange}
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="projectDetails"
								className="block text-gray-700 font-medium mb-2"
							>
								Project Details <span className="text-red-500">*</span>
							</label>
							<textarea
								id="projectDetails"
								name="projectDetails"
								value={formData.projectDetails}
								onChange={handleChange}
								rows="3"
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							></textarea>
						</div>

						<div className="mb-6">
							<label
								htmlFor="consultingNeeds"
								className="block text-gray-700 font-medium mb-2"
							>
								Specific Consulting Needs{" "}
								<span className="text-red-500">*</span>
							</label>
							<textarea
								id="consultingNeeds"
								name="consultingNeeds"
								value={formData.consultingNeeds}
								onChange={handleChange}
								rows="3"
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							></textarea>
						</div>

						<button
							type="submit"
							className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
						>
							Submit Request
						</button>
					</form>
				</div>

				{/* Right Column - Office Location and Direct Contact */}
				<div>
					{/* Office Location */}
					<div className="bg-white shadow-md rounded-lg p-6 mb-6">
						<h2 className="text-2xl font-semibold mb-4">Office Location</h2>
						<div className="aspect-w-16 aspect-h-9 mb-4">
							{/* Replace with an actual map implementation */}
							<div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212645.45394042215!2d72.93972878929586!3d33.616050235148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1646831800000!5m2!1sen!2s"
									width="100%"
									height="100%"
									style={{ border: 0 }}
									allowFullScreen=""
									loading="lazy"
									className="rounded-md"
									title="AES Headquarters location"
								></iframe>
							</div>
						</div>
						<p className="text-gray-700">
							House no 22, Street no 152, <br />
							Sector G-13/4, Islamabad Pakistan
						</p>
					</div>

					{/* Direct Contact */}
					<div className="bg-white shadow-md rounded-lg p-6">
						<h2 className="text-2xl font-semibold mb-4">Direct Contact</h2>
						<div className="space-y-4">
							<div>
								<h3 className="font-medium text-gray-800">
									Business Development Manager
								</h3>
								<p className="text-gray-700">For personalized consultations</p>
							</div>

							<div className="flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-blue-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<a
									href="mailto:astralenergy24@gmail.com"
									className="text-blue-600 hover:underline"
								>
									astralenergy24@gmail.com
								</a>
							</div>

							<div className="flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-blue-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								<a
									href="tel:+923327229966"
									className="text-blue-600 hover:underline"
								>
									00923327229966
								</a>
							</div>

							{/* <div className="mt-4 pt-4 border-t border-gray-200">
								<h3 className="font-medium text-gray-800">Office Hours</h3>
								<p className="text-gray-700">
									Monday to Friday: 9:00 AM - 5:00 PM
								</p>
								<p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
