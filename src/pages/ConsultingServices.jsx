import React from "react";
// Import placeholder images - replace with your actual image paths
// import seismicImage from "../assets/seismic-consulting.jpg";
// import drillingImage from "../assets/drilling-advisory.jpg";
// import geologicalImage from "../assets/geological-studies.jpg";

export default function ConsultingServices() {
	document.title = "AES | Consulting Services";

	return (
		<div className="pt-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
			{/* Page Header */}
			<section className="py-12 md:py-16">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
						Our Consulting Services
					</h1>
					<p className="text-lg md:text-xl text-gray-600 mb-8">
						Expert solutions tailored to the oil, gas, and mineral industries
					</p>
					<div className="h-1 w-32 bg-blue-600 mx-auto"></div>
				</div>
			</section>

			{/* Services Overview */}
			<section className="py-10 mb-12">
				<div className="bg-gray-50 rounded-lg shadow-sm px-6 md:px-10 py-8">
					<p className="text-gray-700 leading-relaxed text-lg">
						At Astral Energy Services, we provide specialized consulting across
						key areas of the energy sector. Our team of experts delivers
						data-driven insights, strategic recommendations, and technical
						expertise to help our clients optimize their operations and achieve
						sustainable growth.
					</p>
				</div>
			</section>

			{/* Seismic Data Consulting */}
			<section className="py-10 mb-16">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="lg:w-2/5">
						<img
							// src={seismicImage}
							alt="Seismic Data Consulting"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
					<div className="lg:w-3/5">
						<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
							Seismic Data Consulting
						</h2>
						<div className="space-y-6">
							<div>
								<h3 className="text-xl font-medium text-blue-600 mb-3">
									Data Acquisition & Processing
								</h3>
								<p className="text-gray-700">
									Our experts provide comprehensive guidance on 2D/3D seismic
									data acquisition planning, field operations oversight, and
									processing quality control. We ensure that your seismic
									programs deliver high-quality data that meets your exploration
									objectives.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium text-blue-600 mb-3">
									Interpretation Strategies
								</h3>
								<p className="text-gray-700">
									We develop customized interpretation workflows and
									methodologies tailored to your geological setting. Our
									approaches integrate structural and stratigraphic analyses to
									identify prospective zones and reduce exploration uncertainty.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium text-blue-600 mb-3">
									Risk Assessment
								</h3>
								<p className="text-gray-700">
									Our risk assessment services evaluate geological, technical,
									and operational factors that might impact exploration success.
									We provide detailed recommendations to mitigate risks and
									optimize resource allocation for exploration projects.
								</p>
							</div>
						</div>

						{/* Case Study Box */}
						<div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6">
							<h4 className="text-lg font-semibold text-gray-800 mb-2">
								Case Study: Gulf Basin Exploration
							</h4>
							<p className="text-gray-700 mb-4">
								AES provided comprehensive seismic interpretation for a
								challenging offshore prospect, resulting in a 40% reduction in
								exploration uncertainty and successful discovery of hydrocarbons
								in a previously overlooked formation.
							</p>
							<p className="text-blue-700 font-medium">
								Impact: $12M in cost savings and 30% increase in recoverable
								reserves estimates.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Drilling Advisory */}
			<section className="py-10 mb-16">
				<div className="flex flex-col lg:flex-row-reverse gap-8">
					<div className="lg:w-2/5">
						<img
							// src={drillingImage}
							alt="Drilling Advisory Services"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
					<div className="lg:w-3/5">
						<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
							Drilling Advisory
						</h2>
						<div className="space-y-6">
							<div>
								<h3 className="text-xl font-medium text-blue-600 mb-3">
									Strategic Planning
								</h3>
								<p className="text-gray-700">
									Our drilling experts develop comprehensive strategies for
									drilling operations, from well site evaluations to mud system
									optimization. We analyze formation characteristics, pressure
									regimes, and technical requirements to design efficient
									drilling programs.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium text-blue-600 mb-3">
									Operational Efficiency
								</h3>
								<p className="text-gray-700">
									We identify opportunities to enhance drilling performance
									through advanced techniques, equipment selection, and
									procedural optimization. Our recommendations focus on reducing
									non-productive time while maintaining the highest safety
									standards.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium text-blue-600 mb-3">
									Regulatory Compliance
								</h3>
								<p className="text-gray-700">
									Our compliance consulting ensures adherence to local and
									international drilling regulations. We provide guidance on
									permitting requirements, environmental standards, and safety
									protocols to mitigate legal and operational risks.
								</p>
							</div>
						</div>

						{/* Case Study Box */}
						<div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6">
							<h4 className="text-lg font-semibold text-gray-800 mb-2">
								Case Study: Complex Formation Drilling
							</h4>
							<p className="text-gray-700 mb-4">
								AES advised on a challenging HPHT well through multiple unstable
								formations, implementing custom mud formulations and casing
								design that prevented common complications.
							</p>
							<p className="text-blue-700 font-medium">
								Impact: 15 days reduction in drilling time and zero safety
								incidents across the project.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Geological Studies */}
			<section className="py-10 mb-16">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="lg:w-2/5">
						<img
							// src={geologicalImage}
							alt="Geological and Reservoir Studies"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
					<div className="lg:w-3/5">
						<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
							Geological & Reservoir Studies
						</h2>
						<div className="space-y-6">
							<div>
								<h3 className="text-xl font-medium text-blue-600 mb-3">
									Basin Modeling
								</h3>
								<p className="text-gray-700">
									Our team conducts comprehensive basin modeling to evaluate
									petroleum systems, source rock maturity, and migration
									pathways. We integrate multiple data sources to build accurate
									models that guide exploration and development strategies.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium text-blue-600 mb-3">
									Geochemistry Assessments
								</h3>
								<p className="text-gray-700">
									We perform detailed geochemical analyses to characterize
									hydrocarbon properties, determine fluid compatibility, and
									identify production challenges. Our assessments provide
									critical insights for reservoir management and production
									optimization.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium text-blue-600 mb-3">
									Feasibility Studies
								</h3>
								<p className="text-gray-700">
									Our feasibility studies and bankable reports provide
									comprehensive technical and economic evaluations to support
									investment decisions. We deliver robust reserve estimations,
									development scenarios, and risk-weighted economic analyses for
									resource projects.
								</p>
							</div>
						</div>

						{/* Case Study Box */}
						<div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6">
							<h4 className="text-lg font-semibold text-gray-800 mb-2">
								Case Study: Mature Field Revitalization
							</h4>
							<p className="text-gray-700 mb-4">
								AES conducted a comprehensive reservoir study for a declining
								field, identifying bypassed pay zones and recommending targeted
								infill drilling and enhanced recovery techniques.
							</p>
							<p className="text-blue-700 font-medium">
								Impact: Extended field life by 12 years and increased
								recoverable reserves by 18 million barrels.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 bg-blue-600 text-white rounded-lg mb-12 px-6 md:px-10">
				<div className="text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						Ready to optimize your energy operations?
					</h2>
					<p className="mb-6 text-blue-100 max-w-3xl mx-auto">
						Contact our team to discuss how our consulting services can address
						your specific challenges and help you achieve your business
						objectives.
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<a
							href="/contact"
							className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
						>
							Request a Consultation
						</a>
						<a
							href="/case-studies"
							className="inline-block px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
						>
							View All Case Studies
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
