import React, { useState } from "react";
import { Link } from "react-router";

export default function ResearchInsight() {
	document.title = "AES | Research & Insights";

	// Sample research items (replace with your actual content later)
	const thoughtLeadershipItems = [
		{
			id: 1,
			title: "The Future of AI in Business Consulting",
			author: "Dr. Sarah Ahmed",
			date: "February 2025",
			excerpt:
				"An exploration of how artificial intelligence is transforming the consulting landscape and creating new opportunities for businesses.",
			category: "Technology",
			readTime: "8 min read",
		},
		{
			id: 2,
			title: "Sustainable Business Practices in South Asia",
			author: "Muhammad Tariq",
			date: "January 2025",
			excerpt:
				"A comprehensive analysis of how companies in South Asia are adopting sustainable practices and the economic benefits they're experiencing.",
			category: "Sustainability",
			readTime: "12 min read",
		},
		{
			id: 3,
			title: "Digital Transformation Roadmap for SMEs",
			author: "Fatima Hassan",
			date: "December 2024",
			excerpt:
				"Strategic guidance for small and medium enterprises looking to navigate their digital transformation journey effectively.",
			category: "Digital Strategy",
			readTime: "10 min read",
		},
	];

	const resourceItems = [
		{
			id: 1,
			title: "2024 Pakistan Business Climate Report",
			type: "Research Paper",
			fileSize: "4.2 MB",
			downloadCount: "842",
		},
		{
			id: 2,
			title: "Financial Services Technology Implementation Guide",
			type: "Technical Report",
			fileSize: "3.7 MB",
			downloadCount: "1,256",
		},
		{
			id: 3,
			title: "National Bank Digital Transformation",
			type: "Case Study",
			fileSize: "2.1 MB",
			downloadCount: "968",
		},
	];

	// State for email subscription
	const [email, setEmail] = useState("");
	const [subscribed, setSubscribed] = useState(false);

	const handleSubscribe = (e) => {
		e.preventDefault();
		// Implement your subscription logic here
		console.log("Subscribed with email:", email);
		setSubscribed(true);
		setEmail("");
	};

	return (
		<div className="container mx-auto px-4 py-8 max-w-6xl">
			<h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
				Research & Insights
			</h1>

			{/* Hero Section */}
			<div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6 md:p-10 mb-12">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						Cutting-Edge Research for Business Excellence
					</h2>
					<p className="text-lg mb-6">
						Access our latest thinking, industry insights, and practical
						resources to help your organization innovate and grow.
					</p>

					{!subscribed ? (
						<form
							onSubmit={handleSubscribe}
							className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
						>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Your email address"
								className="px-4 py-2 rounded-md flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
								required
							/>
							<button
								type="submit"
								className="px-6 py-2 bg-white text-blue-700 font-medium rounded-md hover:bg-gray-100 transition duration-200"
							>
								Subscribe
							</button>
						</form>
					) : (
						<div className="bg-blue-700 rounded-md p-4 max-w-md mx-auto">
							<p className="font-medium">
								Thank you for subscribing! You'll receive our latest research
								directly in your inbox.
							</p>
						</div>
					)}
				</div>
			</div>

			{/* Thought Leadership Section */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200">
					Thought Leadership
				</h2>
				<p className="text-gray-700 mb-6">
					In-depth articles and whitepapers authored by AES consultants,
					offering insights into industry trends and innovations.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{thoughtLeadershipItems.map((item) => (
						<div
							key={item.id}
							className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
						>
							<div className="p-6">
								<span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
									{item.category}
								</span>
								<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
								<p className="text-gray-600 text-sm mb-3">
									By {item.author} • {item.date}
								</p>
								<p className="text-gray-700 mb-4">{item.excerpt}</p>
								<div className="flex justify-between items-center">
									<span className="text-sm text-gray-500">{item.readTime}</span>
									<button className="text-blue-600 hover:text-blue-800 font-medium">
										Read More
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-8">
					<button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200">
						View All Articles
					</button>
				</div>
			</section>

			{/* Downloadable Resources Section */}
			<section>
				<h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200">
					Downloadable Resources
				</h2>
				<p className="text-gray-700 mb-6">
					Access to research papers, technical reports, and case studies
					showcasing AES's consulting impact.
				</p>

				<div className="bg-gray-50 rounded-lg p-6">
					<div className="space-y-4">
						{resourceItems.map((resource) => (
							<div
								key={resource.id}
								className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
							>
								<div>
									<h3 className="text-lg font-semibold">{resource.title}</h3>
									<div className="flex items-center gap-4 mt-2">
										<span className="text-sm text-gray-500">
											{resource.type}
										</span>
										<span className="text-sm text-gray-500">
											{resource.fileSize}
										</span>
										<span className="text-sm text-gray-500">
											{resource.downloadCount} downloads
										</span>
									</div>
								</div>
								<button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 whitespace-nowrap">
									Download PDF
								</button>
							</div>
						))}
					</div>
				</div>

				<div className="bg-gray-100 rounded-lg p-6 mt-8">
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="mb-4 md:mb-0">
							<h3 className="text-xl font-semibold mb-2">
								Need Custom Research?
							</h3>
							<p className="text-gray-700">
								Our consulting team can develop tailored research for your
								specific business challenges.
							</p>
						</div>
						<Link
							to="/contact"
							className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200"
						>
							Contact Us
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
