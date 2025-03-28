/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs - render a sidebar for each doc of that
 group - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	docs: [
		"overview/index",
		"what-is-ngrok",
		"how-ngrok-works",
		"why-ngrok",
		"whats-new",
		{
			label: "Getting Started",
			type: "category",
			link: { type: "doc", id: "getting-started/index" },
			items: [
				"getting-started/index",
				"getting-started/go",
				"getting-started/rust",
				"getting-started/kubernetes",
			],
		},
		{
			label: "Pricing & Limits",
			type: "category",
			link: { type: "doc", id: "pricing-limits/index" },
			items: ["pricing-limits/free-plan-limits"],
		},
		{
			label: "Universal Gateway",
			type: "category",
			collapsible: false,
			className: "menu__list-item--category",
			link: { type: "doc", id: "universal-gateway/overview" },
			items: [
				"universal-gateway/overview",
				{
					label: "What are Domains?",
					type: "category",
					link: {
						type: "doc",
						id: "universal-gateway/domains/what-are-domains",
					},
					items: [
						"universal-gateway/domains/how-do-i-use-my-own-domain",
						"universal-gateway/domains/what-are-managed-domains",
					],
				},
				"universal-gateway/what-are-matching-endpoints",
				{
					label: "What are TCP Addresses?",
					type: "category",
					link: {
						type: "doc",
						id: "universal-gateway/tcp-addresses/what-are-tcp-addresses",
					},
					items: [
						"universal-gateway/tcp-addresses/how-are-tcp-addresses-assigned",
					],
				},
				{
					label: "How Does ngrok Handle TLS?",
					type: "category",
					link: {
						type: "doc",
						id: "universal-gateway/tls-certificates/how-does-ngrok-handle-tls",
					},
					items: [
						"universal-gateway/tls-certificates/what-is-automatic-certificate-management",
						"universal-gateway/tls-certificates/how-are-certificates-selected",
						"universal-gateway/tls-certificates/how-do-i-use-my-own-certificates",
						"universal-gateway/tls-certificates/what-is-a-certificate-bundle",
						"universal-gateway/tls-certificates/what-are-private-tls-keys",
					],
				},
				"universal-gateway/endpoints",
				"universal-gateway/bindings",
				"universal-gateway/public-endpoints/index",
				"universal-gateway/what-are-endpoint-urls",
				{
					label: "What are Internal Endpoints?",
					type: "category",
					link: {
						type: "doc",
						id: "universal-gateway/internal-endpoints/index",
					},
					items: ["universal-gateway/internal-endpoints/quickstart"],
				},
				{
					label: "What are Kubernetes Endpoints?",
					type: "category",
					link: {
						type: "doc",
						id: "universal-gateway/kubernetes-endpoints/index",
					},
					items: [
						"universal-gateway/kubernetes-endpoints/quickstart",
						"universal-gateway/kubernetes-endpoints/services",
						"universal-gateway/kubernetes-endpoints/selector",
					],
				},
				{
					label: "What are Cloud Endpoints?",
					type: "category",
					link: { type: "doc", id: "universal-gateway/cloud-endpoints/index" },
					items: ["universal-gateway/cloud-endpoints/quickstart"],
				},
				"universal-gateway/forward-traffic",
				"universal-gateway/chain-endpoints",
				"universal-gateway/mock-api",
				"universal-gateway/migrate-from-tunnels",
				{
					label: "Endpoints",
					type: "category",
					link: { type: "doc", id: "universal-gateway/endpoints" },
					items: [
						{
							label: "Types",
							type: "category",
							link: { type: "doc", id: "universal-gateway/types" },
							items: [
								{
									label: "Cloud Endpoints",
									type: "category",
									link: {
										type: "doc",
										id: "universal-gateway/cloud-endpoints/index",
									},
									items: ["universal-gateway/cloud-endpoints/quickstart"],
								},
								{
									id: "universal-gateway/agent-endpoints",
									type: "doc",
									label: "Agent Endpoints",
								},
							],
						},
						{
							label: "Protocols",
							type: "category",
							link: { type: "doc", id: "universal-gateway/protocols" },
							items: [
								{
									id: "universal-gateway/http",
									type: "doc",
									label: "HTTP/S",
								},
								{
									id: "universal-gateway/tls",
									type: "doc",
									label: "TLS",
								},
								{
									id: "universal-gateway/tcp",
									type: "doc",
									label: "TCP",
								},
							],
						},
						{
							label: "Bindings",
							type: "category",
							link: { type: "doc", id: "universal-gateway/bindings" },
							items: [
								{
									id: "universal-gateway/public-endpoints/index",
									type: "doc",
									label: "Public",
								},
								{
									id: "universal-gateway/internal-endpoints/index",
									type: "doc",
									label: "Internal",
								},
								{
									id: "universal-gateway/kubernetes-endpoints/index",
									type: "doc",
									label: "Kubernetes",
								},
							],
						},
						{
							id: "universal-gateway/endpoint-pooling",
							type: "doc",
							label: "Pooling",
						},
					],
				},
				{
					label: "Network",
					type: "category",
					link: {
						type: "doc",
						id: "universal-gateway/global-load-balancer",
					},
					items: [
						"universal-gateway/global-load-balancer",
						"universal-gateway/tls-termination",
						"universal-gateway/ddos-protection",
						"universal-gateway/ip-addresses",
						"universal-gateway/points-of-presence",
					],
				},
			],
		},
		{
			label: "Traffic Policy",
			type: "category",
			collapsible: false,
			className: "menu__list-item--category",
			link: { type: "doc", id: "traffic-policy/index" },
			items: [
				"traffic-policy/index",
				{
					label: "Getting Started",
					type: "category",
					link: {
						type: "doc",
						id: "traffic-policy/getting-started/agent-endpoints/cli",
					},
					items: [
						{
							type: "autogenerated",
							dirName: "traffic-policy/getting-started",
						},
					],
				},
				{
					label: "Concepts",
					type: "category",
					link: { type: "doc", id: "traffic-policy/concepts/index" },
					items: [
						{
							type: "autogenerated",
							dirName: "traffic-policy/concepts",
						},
					],
				},
				// When authentication is fleshed out this should be done.
				// {
				// 	label: "Identity",
				// 	type: "category",
				// 	link: { type: "doc", id: "traffic-policy/identity/index" },
				// 	items: [
				// 		{
				// 			type: "autogenerated",
				// 			dirName: "traffic-policy/identity",
				// 		},
				// 	],
				// },
				{
					label: "Actions",
					type: "category",
					link: { type: "doc", id: "traffic-policy/actions/index" },
					items: [
						{
							type: "autogenerated",
							dirName: "traffic-policy/actions",
						},
					],
				},
				{
					label: "Macros",
					type: "category",
					link: { type: "doc", id: "traffic-policy/macros/index" },
					items: [
						{
							type: "autogenerated",
							dirName: "traffic-policy/macros",
						},
					],
				},
				{
					label: "Variables",
					type: "category",
					link: { type: "doc", id: "traffic-policy/variables/index" },
					items: [
						{
							type: "autogenerated",
							dirName: "traffic-policy/variables",
						},
					],
				},
				{
					label: "Resources",
					type: "category",
					link: { type: "doc", id: "traffic-policy/identities" },
					items: ["traffic-policy/identities"],
				},
				{
					label: "Examples",
					type: "category",
					items: [
						{
							type: "autogenerated",
							dirName: "traffic-policy/examples",
						},
					],
				},
				// For later.
				// "traffic-policy/pricing-limits",
			],
		},
		{
			label: "Traffic Observability",
			type: "category",
			collapsible: false,
			className: "menu__list-item--category",
			link: { type: "doc", id: "obs/index" },
			items: [
				"obs/index",
				"obs/traffic-inspection",
				{
					type: "category",
					label: "Events",
					link: { type: "doc", id: "obs/events/index" },
					items: [
						{ id: "obs/events/index", type: "doc", label: "Overview" },
						"obs/events/reference",
					],
				},
			],
		},
		{
			label: "Secure Tunnels",
			type: "category",
			link: { type: "doc", id: "agent/index" },
			className: "menu__list-item--category",
			collapsible: false,
			items: [
				{
					label: "Agent",
					type: "category",
					link: { type: "doc", id: "agent/index" },
					items: [
						"agent/index",
						"agent/web-inspection-interface",
						"agent/cli",
						"agent/cli-api",
						{
							label: "Configuration file",
							type: "category",
							link: { type: "doc", id: "agent/config/index" },
							items: ["agent/config/v2", "agent/config/v3"],
						},
						"agent/api",
						"agent/ssh-reverse-tunnel-agent",
						"agent/ingress",
						"agent/agent-tls-termination",
						"agent/changelog",
						"agent/version-support-policy",
						"agent/diagnose",
					],
				},
				{
					label: "Agent SDKs",
					type: "category",
					link: { type: "doc", id: "agent-sdks/index" },
					items: [{ type: "autogenerated", dirName: "agent-sdks" }],
				},
				{
					label: "Kubernetes",
					type: "category",
					link: { type: "doc", id: "k8s/index" },
					items: [
						"k8s/index",
						"k8s/how-it-works",
						"k8s/with-edges",
						"k8s/getting-started-kic",
						"k8s/getting-started-gwapi",
						"k8s/user-guide",
						"k8s/deployment-guide",
						"k8s/advanced-deployments",
						"k8s/crds",
						"k8s/custom-domain",
						{
							label: "Developer Guide",
							type: "category",
							link: { type: "doc", id: "k8s/developer-guide/index" },
							items: [
								"k8s/developer-guide/architecture",
								"k8s/developer-guide/releasing",
								"k8s/developer-guide/internal-crds",
							],
						},
					],
				},
			],
		},
		{
			label: "Identity & Access",
			type: "category",
			collapsible: false,
			className: "menu__list-item--category",
			link: { type: "doc", id: "iam/index" },
			items: [
				"iam/index",
				{
					type: "category",
					label: "Principals",
					link: { type: "doc", id: "iam/users" },
					items: ["iam/users", "iam/bot-users"],
				},
				{
					type: "category",
					label: "Account Governance",
					link: { type: "doc", id: "iam/sso" },
					items: ["iam/sso", "iam/rbac", "iam/domain-controls"],
				},
			],
		},
		{
			type: "html",
			value: "<div class='menu__section'>Platform</div>",
		},
		{
			label: "API",
			type: "category",
			link: { type: "doc", id: "api/index" },
			items: [
				"api/index",
				{
					type: "category",
					label: "API Reference",
					items: [
						"api/reference",
						// Universal Gateway
						{
							type: "category",
							label: "Universal Gateway",
							items: [
								"api/resources/endpoints",
								"api/resources/reserved-addrs",
								"api/resources/reserved-domains",
								"api/resources/tls-certificates",
								// Edges (deprecated)
								{
									type: "category",
									label: "Edges",
									items: [
										// HTTPS Edges
										{
											type: "category",
											label: "HTTPS Edges",
											items: [
												"api/resources/edges-https",
												"api/resources/edges-https-routes",
												"api/resources/https-edge-mutual-tls-module",
												"api/resources/edge-route-backend-module",
												"api/resources/edge-route-circuit-breaker-module",
												"api/resources/edge-route-compression-module",
												"api/resources/edge-route-ip-restriction-module",
												"api/resources/edge-route-o-auth-module",
												"api/resources/edge-route-oidc-module",
												"api/resources/edge-route-request-headers-module",
												"api/resources/edge-route-response-headers-module",
												"api/resources/edge-route-saml-module",
												"api/resources/edge-route-traffic-policy-module",
												"api/resources/edge-route-user-agent-filter-module",
												"api/resources/edge-route-webhook-verification-module",
												"api/resources/edge-route-websocket-tcp-converter-module",
												"api/resources/https-edge-tls-termination-module",
											],
										},
										// TCP Edges
										{
											type: "category",
											label: "TCP Edges",
											items: [
												"api/resources/edges-tcp",
												"api/resources/tcp-edge-backend-module",
												"api/resources/tcp-edge-ip-restriction-module",
												"api/resources/tcp-edge-traffic-policy-module",
											],
										},
										// TLS Edges
										{
											type: "category",
											label: "TLS Edges",
											items: [
												"api/resources/edges-tls",
												"api/resources/tls-edge-backend-module",
												"api/resources/tls-edge-ip-restriction-module",
												"api/resources/tls-edge-mutual-tls-module",
												"api/resources/tls-edge-tls-termination-module",
												"api/resources/tls-edge-traffic-policy-module",
											],
										},
										// Backends
										{
											type: "category",
											label: "Backends",
											items: [
												"api/resources/failover-backends",
												"api/resources/http-response-backends",
												"api/resources/tunnel-group-backends",
												"api/resources/weighted-backends",
											],
										},
									],
								},
							],
						},
						// Traffic Policy
						{
							type: "category",
							label: "Traffic Policy",
							items: [
								"api/resources/certificate-authorities",
								"api/resources/ip-policies",
								"api/resources/ip-policy-rules",
								"api/resources/application-users",
								"api/resources/application-sessions",
							],
						},
						// Secure Tunnels
						{
							type: "category",
							label: "Secure Tunnels",
							items: [
								"api/resources/agent-ingresses",
								"api/resources/tunnels",
								"api/resources/tunnel-sessions",
							],
						},
						// Observability
						{
							type: "category",
							label: "Observability",
							items: [
								"api/resources/event-destinations",
								"api/resources/event-sources",
								"api/resources/event-subscriptions",
							],
						},
						// IAM
						{
							type: "category",
							label: "IAM",
							items: [
								"api/resources/ip-restrictions",
								"api/resources/api-keys",
								"api/resources/ssh-credentials",
								"api/resources/credentials",
								"api/resources/bot-users",
							],
						},
						// SSH Certificates
						{
							type: "category",
							label: "SSH Certificates",
							items: [
								"api/resources/ssh-certificate-authorities",
								"api/resources/ssh-host-certificates",
								"api/resources/ssh-user-certificates",
							],
						},
						// Partners (Abuse)
						{
							type: "category",
							label: "Partners",
							items: ["api/resources/abuse-reports"],
						},
					],
				},
			],
		},
		{
			label: "Errors",
			type: "category",
			link: { type: "doc", id: "errors/index" },
			items: ["errors/index", "errors/reference"],
		},
		{
			type: "html",
			value: "<div class='menu__section'>Guides</div>",
		},
		{
			label: "API Gateway",
			type: "category",
			items: [
				"guides/api-gateway/get-started",
				"guides/api-gateway/kubernetes",
				"guides/api-gateway/multicloud",
			],
		},
		{
			label: "Device Gateway",
			type: "category",
			link: { type: "doc", id: "guides/device-gateway/index" },
			items: [{ type: "autogenerated", dirName: "guides/device-gateway" }],
		},
		{
			label: "Identity Aware Proxy",
			type: "category",
			link: { type: "doc", id: "guides/identity-aware-proxy/index" },
			items: [
				{ type: "autogenerated", dirName: "guides/identity-aware-proxy" },
			],
		},
		{
			label: "Site-to-Site Connectivity",
			type: "category",
			link: { type: "doc", id: "guides/site-to-site-connectivity/index" },
			items: [
				{
					type: "autogenerated",
					dirName: "guides/site-to-site-connectivity",
				},
			],
		},
		{
			label: "Developer Preview",
			type: "category",
			link: { type: "doc", id: "guides/developer-preview/index" },
			items: [{ type: "autogenerated", dirName: "guides/developer-preview" }],
		},
		{
			label: "Other guides",
			type: "category",
			link: { type: "doc", id: "guides/other-guides/index" },
			items: [{ type: "autogenerated", dirName: "guides/other-guides" }],
		},
		{
			label: "Using ngrok with",
			type: "category",
			link: { type: "doc", id: "using-ngrok-with" },
			items: [{ type: "autogenerated", dirName: "using-ngrok-with" }],
		},
		{
			label: "Integrations",
			type: "category",
			link: { type: "doc", id: "integrations/index" },
			items: [{ type: "autogenerated", dirName: "integrations" }],
		},
		{
			type: "html",
			value: "<div class='menu__section'></div>",
		},
		"faq/faq",
		{
			label: "Deprecated",
			type: "category",
			items: ["universal-gateway/edges"],
		},
	],
};

module.exports = sidebars;
