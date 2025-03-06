import React from "react";
// Import placeholder images for team members - replace with your actual image paths
// import leadershipImage from "../assets/leadership-team.jpg";
import hseImage from "../assets/hse.png";

export default function About() {
	document.title = "AES | About us";

	return (
		<div className="pt-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
			{/* Page Header */}
			<section className="py-12 md:py-16">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
						About Astral Energy Services
					</h1>
					<p className="text-lg md:text-xl text-gray-600 mb-8">
						Dedicated to excellence in energy consultancy
					</p>
					<div className="h-1 w-32 bg-blue-600 mx-auto"></div>
				</div>
			</section>

			{/* Who We Are Section */}
			<section className="py-10 mb-12">
				<div className="bg-gray-50 rounded-lg shadow-sm px-6 md:px-10 py-8">
					<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
						Who We Are
					</h2>
					<p className="text-gray-700 leading-relaxed text-lg">
						AES is a consultancy firm dedicated to guiding energy companies
						through complex challenges. Our tailored strategies, backed by
						decades of experience, help clients navigate evolving industry
						landscapes.
					</p>
				</div>
			</section>

			{/* Mission & Vision Section */}
			<section className="py-10 mb-12">
				<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
					Mission & Vision
				</h2>

				<div className="grid md:grid-cols-2 gap-8">
					{/* Mission Card */}
					<div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
						<div className="bg-blue-600 h-2"></div>
						<div className="p-6">
							<h3 className="text-xl font-semibold text-gray-800 mb-3">
								Our Mission
							</h3>
							<p className="text-gray-600">
								To deliver data-driven, innovative consulting services that set
								new industry benchmarks.
							</p>
						</div>
					</div>

					{/* Vision Card */}
					<div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
						<div className="bg-blue-600 h-2"></div>
						<div className="p-6">
							<h3 className="text-xl font-semibold text-gray-800 mb-3">
								Our Vision
							</h3>
							<p className="text-gray-600">
								To be a global leader in energy consultancy, enabling clients to
								unlock their full potential.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Leadership & Team Section */}
			<section className="py-10 mb-12">
				<div className="flex flex-col md:flex-row gap-8 items-center">
					<div className="md:w-1/2">
						<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
							Leadership & Team
						</h2>
						<p className="text-gray-700 mb-6">
							Our team consists of senior consultants, geologists, and technical
							advisors with global experience and specialized expertise in the
							energy sector.
						</p>
						<p className="text-gray-700">
							Each member brings a unique perspective and deep industry
							knowledge, allowing us to address the most complex challenges
							faced by energy companies worldwide.
						</p>
					</div>
					<div className="md:w-1/2">
						<img
							// src={leadershipImage}
							alt="AES Leadership Team"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
				</div>

				{/* Team Profiles Placeholder - You can expand this section */}
				<div className="mt-12 grid md:grid-cols-3 gap-6">
					{/* Example Team Member Card - Repeat as needed */}
					<div className="bg-white rounded-lg shadow p-6 text-center">
						<div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
						<h3 className="text-xl font-semibold mb-1">John Doe</h3>
						<p className="text-blue-600 mb-3">Chief Geological Advisor</p>
						<p className="text-gray-600 text-sm">
							With over 25 years of experience in petroleum geology and resource
							evaluation.
						</p>
					</div>

					<div className="bg-white rounded-lg shadow p-6 text-center">
						<div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
						<h3 className="text-xl font-semibold mb-1">Jane Smith</h3>
						<p className="text-blue-600 mb-3">Senior Drilling Consultant</p>
						<p className="text-gray-600 text-sm">
							Specialized in optimizing drilling operations and safety
							protocols.
						</p>
					</div>

					<div className="bg-white rounded-lg shadow p-6 text-center">
						<div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
						<h3 className="text-xl font-semibold mb-1">Robert Johnson</h3>
						<p className="text-blue-600 mb-3">Seismic Data Specialist</p>
						<p className="text-gray-600 text-sm">
							Expert in interpreting complex geological data for exploration
							projects.
						</p>
					</div>
				</div>
			</section>

			{/* HSE Section */}
			<section className="py-10 mb-12">
				<div className="flex flex-col md:flex-row-reverse gap-8 items-center">
					<div className="md:w-1/2">
						<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
							Health, Safety & Environment (HSE)
						</h2>
						<p className="text-gray-700 mb-6">
							Our consulting approach integrates HSE best practices, helping
							clients achieve operational excellence while prioritizing safety
							and sustainability.
						</p>
						<p className="text-gray-700 mb-6">
							We believe that responsible environmental stewardship and
							stringent safety standards are not just regulatory requirements,
							but essential components of business success in the energy sector.
						</p>
						<ul className="list-disc pl-5 text-gray-700 space-y-2">
							<li>Comprehensive safety management systems</li>
							<li>Environmental impact assessments</li>
							<li>Sustainable resource management</li>
							<li>Regulatory compliance consulting</li>
						</ul>
					</div>
					<div className="md:w-1/2">
						<img
							src={hseImage}
							alt="Health, Safety and Environment"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			{/* <section className="py-12 bg-blue-600 text-white rounded-lg mb-12 px-6 md:px-10">
				<div className="text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						Want to work with our expert team?
					</h2>
					<p className="mb-6 text-blue-100 max-w-3xl mx-auto">
						Connect with Astral Energy Services to learn how our consultancy
						expertise can help your organization achieve its goals.
					</p>
					<a
						href="/contact"
						className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
					>
						Get in Touch
					</a>
				</div>
			</section> */}
		</div>
	);
}
