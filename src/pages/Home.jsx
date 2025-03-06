import React from "react";
// Import a placeholder image - replace with your actual hero image path
import heroImage from "../assets/hero.png";
import { Link } from "react-router";

export default function Home() {
	document.title = "AES | Home";

	return (
		<div className="py-12 md:py-16">
			{/* Hero Section with Background Image */}
			<section className="relative h-96 md:h-screen max-h-[600px] w-full">
				{/* Background Image */}
				<div className="absolute inset-0 w-full h-full">
					<img
						src={heroImage}
						alt="Consulting team working on energy project blueprints"
						className="w-full h-full object-cover"
					/>
					{/* Dark Overlay */}
					{/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
				</div>

				{/* Hero Content */}
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
					<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
						Expert Consultancy for a Sustainable Energy Future
					</h1>
					<p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-100">
						Strategic solutions for the oil, gas, and mineral industries
					</p>
					<Link
						to="/consultingservices"
						className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors text-lg"
					>
						Explore Our Expertise
					</Link>
				</div>
			</section>

			{/* Main Content Container */}
			<div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
				{/* Introduction Section */}
				<section className="py-12 md:py-16">
					<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
						Introduction
					</h2>
					<div className="bg-gray-50 rounded-lg shadow-sm px-6 md:px-10 py-8">
						<p className="text-gray-700 leading-relaxed text-lg">
							Welcome to
							<strong>Astral Energy Services Private Limited (AES)</strong> —
							your trusted consulting partner in the oil, gas, and mineral
							industries. We offer strategic insights, technical expertise, and
							data-driven solutions to help clients optimize exploration,
							drilling, and resource management. With a team of seasoned
							professionals, we empower energy companies to make informed
							decisions and achieve sustainable growth.
						</p>
					</div>
				</section>

				{/* Key Consulting Areas */}
				<section className="py-10 mb-12">
					<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
						Key Consulting Areas
					</h2>

					<div className="grid md:grid-cols-3 gap-6 lg:gap-8">
						{/* Card 1 */}
						<div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
							<div className="bg-blue-600 h-2"></div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-800 mb-3">
									Seismic Data Consulting
								</h3>
								<p className="text-gray-600">
									Expert guidance on data acquisition, processing, and
									interpretation.
								</p>
							</div>
						</div>

						{/* Card 2 */}
						<div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
							<div className="bg-blue-600 h-2"></div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-800 mb-3">
									Drilling Advisory
								</h3>
								<p className="text-gray-600">
									End-to-end consulting for well planning, safety compliance,
									and operational efficiency.
								</p>
							</div>
						</div>

						{/* Card 3 */}
						<div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
							<div className="bg-blue-600 h-2"></div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-800 mb-3">
									Geological Studies & Analysis
								</h3>
								<p className="text-gray-600">
									In-depth reservoir evaluation, geochemistry analysis, and
									feasibility studies.
								</p>
							</div>
						</div>
					</div>

					<div className="mt-8 text-center">
						<Link
							to="/consultingservices"
							className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
						>
							Learn More About Our Services →
						</Link>
					</div>
				</section>

				{/* Testimonials Section */}
				<section className=" mb-12">
					<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
						Client Testimonials
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						{/* Testimonial 1 */}
						<div className="bg-white p-6 rounded-lg shadow border border-gray-100">
							<p className="text-gray-700 italic mb-4 text-lg">
								"AES's strategic consulting helped us streamline operations and
								identify new exploration opportunities."
							</p>
							<p className="text-gray-800 font-semibold">— Client A</p>
						</div>

						{/* Testimonial 2 */}
						<div className="bg-white p-6 rounded-lg shadow border border-gray-100">
							<p className="text-gray-700 italic mb-4 text-lg">
								"Their geochemical insights provided the clarity we needed to
								optimize our resource extraction strategy."
							</p>
							<p className="text-gray-800 font-semibold">— Client B</p>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				{/* <section className="py-12 bg-blue-600 text-white rounded-lg mb-12 px-6 md:px-10">
					<div className="text-center">
						<h2 className="text-2xl md:text-3xl font-bold mb-4">
							Ready to optimize your energy operations?
						</h2>
						<p className="mb-6 text-blue-100 max-w-3xl mx-auto">
							Partner with AES to leverage our expertise in the oil, gas, and
							mineral industries. Let us help you make data-driven decisions for
							sustainable growth.
						</p>
						<a
							href="/contact"
							className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
						>
							Contact Us Today
						</a>
					</div>
				</section> */}
			</div>
		</div>
	);
}
