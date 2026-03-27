// Multi-language translation system for Digital Safety Hub

const translations = {
    en: {
        meta: {
            site_name: "Digital Safety Hub",
            home_title: "Digital Safety Hub - Protect Yourself Online",
            home_description: "Learn essential cybersecurity skills to protect yourself from online threats. Free resources, practical guides, and interactive learning tools.",
            threats_title: "Common Online Threats - Digital Safety Hub",
            threats_description: "Learn about common cybersecurity threats including phishing, malware, ransomware, and social engineering. Interactive guides to help you stay safe.",
            prevention_title: "Cybersecurity Prevention Guide - Digital Safety Hub",
            prevention_description: "Learn essential cybersecurity prevention techniques including strong passwords, two-factor authentication, safe browsing, and regular backups.",
            resources_title: "Cybersecurity Resources & Tools - Digital Safety Hub",
            resources_description: "Curated collection of cybersecurity tools, guides, and resources from trusted organizations like CISA, EFF, and OWASP.",
            about_title: "About - Digital Safety Hub",
            about_description: "Learn about Digital Safety Hub's mission to provide accessible cybersecurity education and resources for everyone."
        },
        common: {
            logo: "Digital Safety Hub",
            select_language: "Select language",
            toggle_menu: "Toggle navigation menu",
            back_to_top: "Back to top",
            learn_more: "Learn More",
            show_less: "Show Less"
        },
        nav: {
            home: "Home",
            threats: "Threats",
            prevention: "Prevention",
            resources: "Resources",
            about: "About",
            common_threats: "Common Threats",
            protection_guide: "Protection Guide",
            tools_resources: "Tools & Resources",
            about_site: "About This Site"
        },
        hero: {
            title: "DEFEND AGAINST CYBER THREATS",
            description: "Learn essential cybersecurity skills to stay safe online. Discover threats, master prevention techniques, and access trusted resources—all in one place."
        },
        buttons: {
            explore_threats: "EXPLORE THREATS",
            start_protecting: "START PROTECTING",
            learn_more: "LEARN MORE",
            view_resources: "VIEW RESOURCES",
            quick_scan: "QUICK SCAN"
        },
        features: {
            title: "Why Digital Safety Matters",
            personal_data: {
                title: "Personal Data Protection",
                description: "Your personal information is valuable. Learn how to keep your data, photos, and communications private and secure."
            },
            financial_security: {
                title: "Financial Security",
                description: "Protect your bank accounts, credit cards, and digital payments from fraud and unauthorized access."
            },
            identity_safety: {
                title: "Identity Safety",
                description: "Prevent identity theft and protect your online reputation from malicious actors and scammers."
            }
        },
        demo: {
            title: "Spot the Phishing Email",
            description: "Test your skills! Hover over different parts of this suspicious email to learn what makes it dangerous.",
            results_title: "🚨 This is a phishing email! Here's why:",
            warning_signs: [
                "Suspicious sender domain",
                "Urgent, threatening language",
                "Generic greeting",
                "Suspicious links",
                "Grammar mistakes"
            ],
            email: {
                from_label: "From:",
                from_address: "security@verify-account-bank.com",
                from_tooltip: "Suspicious sender: doesn't match the claimed bank domain",
                subject_label: "Subject:",
                subject_text: "URGENT: Your account will be closed in 24 hours",
                subject_tooltip: "Urgent language designed to create panic",
                greeting: "Dear Customer,",
                body_line1: "We detected suspicious activity on your account.",
                body_line1_tooltip: "Generic greeting - legitimate banks use your actual name",
                body_line2: "You must verify your identity immediately or your account will be permanently closed.",
                body_line2_tooltip: "Creating false urgency to pressure quick action",
                body_link: "Click here to verify your account",
                body_link_tooltip: "Hover to see: malicious link disguised as legitimate bank URL",
                body_line3: "Thank you for you're cooperation.",
                body_line3_tooltip: "Poor grammar and spelling errors are red flags"
            }
        },
        threats: {
            page_title: "Common Online Threats",
            page_description: "Understanding threats is the first step to protection. Click on each threat below to learn how to recognize and defend against it.",
            phishing: {
                title: "Phishing",
                summary: "Fraudulent emails and websites designed to steal your personal information.",
                details: {
                    what_is: "What is Phishing?",
                    what_description: "Phishing attacks use deceptive emails, texts, or websites that appear to be from legitimate organizations to trick you into revealing sensitive information like passwords, credit card numbers, or social security numbers.",
                    real_example: "Real Example",
                    example_description: "An email claiming to be from your bank saying \"Your account will be closed unless you verify your information immediately\" with a link to a fake banking website.",
                    warning_signs: "Warning Signs",
                    warning_signs_list: [
                        "Urgent or threatening language",
                        "Generic greetings (\"Dear Customer\")",
                        "Suspicious sender addresses",
                        "Unexpected attachments or links",
                        "Poor grammar and spelling"
                    ],
                    protection: "How to Protect Yourself",
                    protection_list: [
                        "Never click links in suspicious emails",
                        "Type website URLs directly into your browser",
                        "Verify requests by calling the organization directly",
                        "Use email filters and spam protection",
                        "Keep your software updated"
                    ],
                    learn_more: "Learn More",
                    source1: "Phishing.org Resources",
                    source2: "CISA Best Practices"
                }
            },
            malware: {
                title: "Malware",
                summary: "Malicious software that can damage your computer or steal your data.",
                details: {
                    what_is: "What is Malware?",
                    what_description: "Malware is any software intentionally designed to cause damage to a computer, server, client, or computer network. It includes viruses, worms, trojan horses, spyware, and ransomware.",
                    real_example: "Real Example",
                    example_description: "A fake software update popup that actually installs keylogger software to capture everything you type, including passwords and credit card numbers.",
                    warning_signs: "Warning Signs",
                    warning_signs_list: [
                        "Computer running slowly",
                        "Unexpected pop-ups or ads",
                        "Programs opening or closing automatically",
                        "Files being deleted or encrypted",
                        "Unusual network activity"
                    ],
                    protection: "How to Protect Yourself",
                    protection_list: [
                        "Use reputable antivirus software",
                        "Keep your operating system updated",
                        "Download software only from official sources",
                        "Be cautious with email attachments",
                        "Regular system backups"
                    ],
                    learn_more: "Learn More",
                    source1: "CISA Malware Guide",
                    source2: "EFF Security Guide"
                }
            },
            ransomware: {
                title: "Ransomware",
                summary: "Malware that encrypts your files and demands payment for the decryption key.",
                details: {
                    what_is: "What is Ransomware?",
                    what_description: "Ransomware is a type of malware that encrypts files on your computer or network, making them inaccessible until you pay a ransom to the attackers for the decryption key.",
                    real_example: "Real Example",
                    example_description: "The WannaCry attack in 2017 infected hundreds of thousands of computers worldwide, encrypting files and demanding Bitcoin payments. It affected hospitals, businesses, and government systems.",
                    warning_signs: "Warning Signs",
                    warning_signs_list: [
                        "Files become inaccessible or encrypted",
                        "Ransom notes appear on your screen",
                        "File extensions change to unusual formats",
                        "System performance degrades suddenly",
                        "Suspicious network activity"
                    ],
                    protection: "How to Protect Yourself",
                    protection_list: [
                        "Regular automated backups (offline storage)",
                        "Keep software and systems updated",
                        "Use endpoint protection software",
                        "Train users to recognize phishing attempts",
                        "Limit user privileges and network access"
                    ],
                    learn_more: "Learn More",
                    source1: "CISA Ransomware Guide",
                    source2: "KrebsOnSecurity Reports"
                }
            },
            social_engineering: {
                title: "Social Engineering",
                summary: "Psychological manipulation to trick people into revealing information or performing actions.",
                details: {
                    what_is: "What is Social Engineering?",
                    what_description: "Social engineering uses psychological manipulation to trick people into divulging confidential information or performing actions that compromise security, often exploiting human emotions like fear, curiosity, or helpfulness.",
                    real_example: "Real Example",
                    example_description: "A caller pretending to be from IT support asking for your password to \"fix a system issue.\" They create urgency and authority to pressure you into complying.",
                    warning_signs: "Warning Signs",
                    warning_signs_list: [
                        "Unsolicited contact asking for sensitive information",
                        "Creating false urgency or emergency situations",
                        "Claiming to be from authority figures",
                        "Offering something too good to be true",
                        "Playing on emotions (fear, greed, sympathy)"
                    ],
                    protection: "How to Protect Yourself",
                    protection_list: [
                        "Verify the identity of anyone requesting information",
                        "Be skeptical of unsolicited contact",
                        "Never give out passwords or sensitive data",
                        "Take time to think before acting",
                        "Follow established verification procedures"
                    ],
                    learn_more: "Learn More",
                    source1: "CISA Awareness Program",
                    source2: "EFF Surveillance Self-Defense"
                }
            },
            weak_passwords: {
                title: "Weak & Reused Passwords",
                summary: "Simple or repeated passwords make it easy for attackers to gain access to your accounts.",
                details: {
                    what_is: "What are Weak/Reused Passwords?",
                    what_description: "Weak passwords are easy to guess or crack, while reused passwords mean that if one account is compromised, attackers can access all your other accounts using the same password.",
                    real_example: "Real Example",
                    example_description: "Using \"password123\" or \"123456\" for your email, which can be cracked in seconds. Or using the same password for your email, banking, and social media accounts.",
                    warning_signs: "Warning Signs",
                    warning_signs_list: [
                        "Using common passwords (password, 123456, qwerty)",
                        "Using personal information (birthday, name, address)",
                        "Using the same password across multiple sites",
                        "Passwords shorter than 12 characters",
                        "Never changing default passwords"
                    ],
                    protection: "How to Protect Yourself",
                    protection_list: [
                        "Use unique passwords for each account",
                        "Create long, complex passwords (12+ characters)",
                        "Use a password manager",
                        "Enable two-factor authentication",
                        "Change default passwords immediately"
                    ],
                    learn_more: "Learn More",
                    source1: "Check if your password is compromised",
                    source2: "NIST Password Guidelines"
                }
            },
            public_wifi: {
                title: "Unsafe Public Wi-Fi",
                summary: "Unsecured networks that allow attackers to intercept your data and communications.",
                details: {
                    what_is: "What are Public Wi-Fi Risks?",
                    what_description: "Public Wi-Fi networks are often unsecured, allowing cybercriminals to intercept data transmitted over the network, steal personal information, or inject malware into connected devices.",
                    real_example: "Real Example",
                    example_description: "Connecting to \"Free_WiFi\" at a coffee shop, which is actually run by a hacker who can see all your browsing activity, capture login credentials, and steal personal data.",
                    warning_signs: "Warning Signs",
                    warning_signs_list: [
                        "Networks without passwords",
                        "Suspicious network names (\"Free_WiFi\", \"Airport_WiFi\")",
                        "Multiple networks with similar names",
                        "Requests to install certificates or software",
                        "Pop-ups asking for personal information"
                    ],
                    protection: "How to Protect Yourself",
                    protection_list: [
                        "Use a VPN on public networks",
                        "Verify network names with staff",
                        "Avoid accessing sensitive accounts",
                        "Turn off auto-connect to Wi-Fi",
                        "Use your mobile hotspot instead"
                    ],
                    learn_more: "Learn More",
                    source1: "CISA Wi-Fi Security",
                    source2: "EFF Privacy Guides"
                }
            },
            cta: {
                title: "Ready to Protect Yourself?",
                description: "Now that you know the threats, learn how to defend against them.",
                button: "View Protection Guide"
            }
        },
        prevention: {
            page_title: "Protection & Prevention Guide",
            page_description: "Practical steps to secure your digital life. Check off items as you complete them to build your personal security foundation.",
            progress: {
                title: "Your Security Progress",
                of: "of",
                completed: "items completed"
            },
            categories: {
                passwords: {
                    title: "Password Security",
                    description: "Strong, unique passwords are your first line of defense",
                    items: {
                        manager: "Use a password manager (recommended: Bitwarden, 1Password, LastPass)",
                        manager_details: "Password managers generate and store unique, complex passwords for all your accounts. They sync across devices and only require you to remember one master password.",
                        manager_link: "CISA Password Guidelines",
                        unique: "Create unique passwords for each account (minimum 12 characters)",
                        unique_details: "Reusing passwords means one breach compromises all your accounts. Use passphrases like \"Coffee$Morning#Walk2024\" instead of complex character combinations.",
                        defaults: "Change default passwords on all devices and accounts immediately",
                        defaults_details: "Default passwords are often well-known or easily guessed (like \"admin\" or \"password\"). This includes routers, smart devices, and new accounts."
                    }
                },
                twofa: {
                    title: "Two-Factor Authentication (2FA)",
                    description: "Add an extra layer of security to your most important accounts",
                    items: {
                        email: "Enable 2FA on email accounts (Gmail, Outlook, Yahoo, etc.)",
                        email_details: "Email is often used to reset passwords for other accounts, making it a high-value target. Use authenticator apps like Google Authenticator or Authy instead of SMS when possible.",
                        email_link: "Google Security Center",
                        banking: "Enable 2FA on banking and financial accounts",
                        banking_details: "Financial accounts contain sensitive information and direct access to your money. Most banks and credit cards now offer 2FA options through apps or text messages.",
                        social: "Enable 2FA on social media accounts (Facebook, Twitter, Instagram, etc.)",
                        social_details: "Compromised social media accounts can be used to spread malware, scam your contacts, or damage your reputation through impersonation.",
                        backup_codes: "Store backup codes in a secure location (password manager or safe)",
                        backup_codes_details: "Backup codes allow you to access your accounts if you lose your phone or authenticator app. Store them securely and never share them."
                    }
                },
                updates: {
                    title: "Software Updates & Maintenance",
                    description: "Keep your systems secure with regular updates",
                    items: {
                        operating_system: "Enable automatic updates for operating system (Windows, macOS, iOS, Android)",
                        operating_system_details: "Security patches fix vulnerabilities that attackers exploit. Automatic updates ensure you get these fixes as soon as they're available.",
                        browsers: "Keep web browsers updated (Chrome, Firefox, Safari, Edge)",
                        browsers_details: "Browsers are frequent targets for attacks. Updates include security fixes and new privacy features. Most browsers update automatically by default.",
                        antivirus: "Install reputable antivirus software and keep it updated",
                        antivirus_details: "Modern antivirus goes beyond traditional virus detection to include real-time protection, web security, and behavior analysis. Windows Defender is included with Windows and is quite effective."
                    }
                },
                browsing: {
                    title: "Safe Browsing Habits",
                    description: "Develop habits that protect you while surfing the web",
                    items: {
                        verify_urls: "Verify website URLs before entering sensitive information",
                        verify_urls_details: "Look for HTTPS (the lock icon), check for typos in domain names (like \"g00gle.com\"), and type URLs directly instead of clicking links in emails.",
                        vpn: "Use a VPN on public Wi-Fi networks",
                        vpn_details: "VPNs encrypt your internet traffic, protecting it from eavesdropping on unsecured networks. Popular options include NordVPN, ExpressVPN, and ProtonVPN.",
                        official_sources: "Download software only from official sources (App Store, Google Play, official websites)",
                        official_sources_details: "Third-party download sites often bundle malware with legitimate software. Stick to official app stores and vendor websites for downloads."
                    }
                },
                backup: {
                    title: "Data Backup & Recovery",
                    description: "Protect your important files from loss or ransomware",
                    items: {
                        cloud: "Set up automatic cloud backup (iCloud, Google Drive, OneDrive)",
                        cloud_details: "Cloud backups protect against device theft, damage, and ransomware. Most services offer automatic syncing of important folders and files.",
                        offline: "Create offline backups of critical data (external hard drive, USB)",
                        offline_details: "Offline backups provide protection even if your internet connection or cloud service is compromised. Follow the 3-2-1 rule: 3 copies, 2 different media types, 1 offsite.",
                        test: "Test your backups regularly to ensure they work",
                        test_details: "A backup is only useful if it actually works. Periodically try restoring files from your backup to make sure the process works when you need it."
                    }
                }
            },
            completion: {
                title: "🎉 Congratulations!",
                message: "You've completed all the essential security steps. Your digital safety is now significantly improved!",
                print_button: "Print Security Checklist"
            }
        },
        resources: {
            page_title: "Resources & Tools",
            page_description: "Trusted cybersecurity resources, tools, and guides from authoritative organizations. Click any resource to learn more.",
            sections: {
                government: {
                    title: "Government & Official Resources",
                    description: "Authoritative guidance from trusted government agencies",
                    cisa_best: {
                        title: "CISA Cybersecurity Best Practices",
                        description: "Official U.S. government guidance on cybersecurity fundamentals for individuals and organizations."
                    },
                    cisa_tools: {
                        title: "CISA Free Cybersecurity Tools",
                        description: "Free security tools and resources provided by the Cybersecurity and Infrastructure Security Agency."
                    },
                    nist: {
                        title: "NIST Cybersecurity Framework",
                        description: "Comprehensive framework for improving cybersecurity risk management from the National Institute of Standards."
                    }
                },
                organizations: {
                    title: "Security Organizations & Guides",
                    description: "Expert resources from leading cybersecurity organizations",
                    owasp: {
                        title: "OWASP Top 10",
                        description: "The most critical web application security risks, updated regularly by security professionals worldwide."
                    },
                    eff: {
                        title: "EFF Surveillance Self-Defense",
                        description: "Expert guides for protecting yourself and your friends from digital surveillance by using secure technology."
                    },
                    phishing: {
                        title: "Phishing.org Resources",
                        description: "Educational resources and training materials to help recognize and avoid phishing attacks."
                    }
                },
                tools: {
                    title: "Security Tools & Checkers",
                    description: "Practical tools to check your security and protect your data",
                    hibp: {
                        title: "Have I Been Pwned",
                        description: "Check if your email or phone number has appeared in data breaches and monitor for future incidents."
                    },
                    virus_total: {
                        title: "VirusTotal",
                        description: "Free online service that analyzes files and URLs for malware using multiple antivirus engines."
                    },
                    password_checker: {
                        title: "Password Strength Checker",
                        description: "Test how secure your passwords are and get suggestions for creating stronger ones."
                    },
                    google_safety: {
                        title: "Google Safety Center",
                        description: "Google's comprehensive security and privacy resources, including account security tools, privacy checkups, and guidance for staying safe online."
                    },
                    google_advanced: {
                        title: "Google Advanced Protection",
                        description: "Google's strongest security protections for users who face elevated online threats, including journalists, activists, business leaders, and political campaign teams."
                    }
                },
                news: {
                    title: "Security News & Research",
                    description: "Stay informed with the latest cybersecurity news and research",
                    krebs: {
                        title: "KrebsOnSecurity",
                        description: "Investigative cybersecurity journalism by Brian Krebs, covering the latest threats, data breaches, and cybercrime investigations with in-depth analysis."
                    },
                    cisa_awareness: {
                        title: "CISA Cybersecurity Awareness",
                        description: "CISA's cybersecurity awareness program providing educational resources, training materials, and campaigns to improve cybersecurity awareness nationwide."
                    }
                }
            },
            cta: {
                title: "Need Help Getting Started?",
                description: "Check out our prevention guide for a step-by-step approach to securing your digital life.",
                button: "View Prevention Guide"
            }
        },
        about: {
            page_title: "About Digital Safety Hub",
            page_description: "Empowering everyone with the knowledge and tools to stay safe in the digital world.",
            mission: {
                title: "Our Mission",
                content: "Digital Safety Hub was created to bridge the cybersecurity knowledge gap by providing accessible, practical, and actionable information to help people protect themselves online. We believe that cybersecurity education should be available to everyone, regardless of their technical background.",
                content2: "In an increasingly connected world, cyber threats affect individuals, families, and communities every day. Our goal is to empower people with the knowledge and tools they need to recognize threats, implement protective measures, and respond effectively to security incidents."
            },
            why: {
                title: "Why This Matters",
                content: "Cybercrime affects millions of people each year, with losses reaching billions of dollars globally. Beyond financial impact, cyber attacks can compromise personal privacy, damage reputations, and cause significant emotional distress.",
                content2: "Many security resources are either too technical for the average person or too basic to be truly helpful. We aim to provide the right level of detail—enough to be actionable, but accessible enough for anyone to understand and implement."
            },
            approach: {
                title: "Our Approach",
                content: "We focus on practical, implementable security measures rather than abstract concepts. Each recommendation includes clear steps, real-world examples, and links to authoritative sources for further learning.",
                content2: "Our content is designed to be:",
                accessible: {
                    title: "Accessible:",
                    content: "Written in plain language without unnecessary jargon"
                },
                actionable: {
                    title: "Actionable:",
                    content: "Focused on specific steps you can take today"
                },
                authoritative: {
                    title: "Authoritative:",
                    content: "Based on guidance from trusted security organizations"
                },
                current: {
                    title: "Current:",
                    content: "Regularly updated to reflect the latest threats and best practices"
                }
            },
            sources: {
                title: "Content Sources",
                content: "All information on this site is derived from authoritative cybersecurity sources, including:",
                cisa: {
                    title: "CISA (Cybersecurity and Infrastructure Security Agency):",
                    content: "Official U.S. government cybersecurity guidance"
                },
                nist: {
                    title: "NIST (National Institute of Standards and Technology):",
                    content: "Cybersecurity frameworks and standards"
                },
                owasp: {
                    title: "OWASP (Open Web Application Security Project):",
                    content: "Web application security best practices"
                },
                eff: {
                    title: "EFF (Electronic Frontier Foundation):",
                    content: "Digital privacy and security resources"
                },
                researchers: {
                    title: "Leading security researchers:",
                    content: "Current threat intelligence and analysis"
                },
                content2: "We do not create security advice from scratch—instead, we curate, summarize, and present existing authoritative guidance in an accessible format."
            },
            principles: {
                title: "Our Principles",
                accessibility: {
                    title: "Accessibility First",
                    content: "Security shouldn't be a privilege. We make cybersecurity knowledge accessible to everyone, regardless of technical background or experience level."
                },
                evidence: {
                    title: "Evidence-Based",
                    content: "Every recommendation is backed by authoritative sources and established security best practices. We cite our sources and encourage further learning."
                },
                action: {
                    title: "Action-Oriented",
                    content: "Knowledge without action doesn't improve security. We focus on practical steps you can implement immediately to improve your digital safety."
                },
                current: {
                    title: "Always Current",
                    content: "The threat landscape evolves constantly. We regularly update our content to reflect new threats, tools, and best practices in cybersecurity."
                }
            },
            disclaimers: {
                title: "Important Disclaimers",
                educational: {
                    title: "Educational Purpose",
                    content: "This website is designed for educational purposes only. While we strive for accuracy and usefulness, cybersecurity is complex and situational. Always consult with cybersecurity professionals for specific security needs or incident response."
                },
                guarantees: {
                    title: "No Guarantees",
                    content: "Following the guidance on this site will improve your security posture, but no security measures are 100% effective. Cyber threats are constantly evolving, and determined attackers may still find ways to compromise systems despite best practices."
                },
                links: {
                    title: "External Links",
                    content: "We link to external resources from trusted organizations. These links are provided for convenience and additional information. We are not responsible for the content, privacy practices, or security of external websites."
                },
                privacy: {
                    title: "Privacy",
                    content: "This website does not collect personal information, use tracking cookies, or share data with third parties. We believe privacy education should come with privacy protection."
                }
            },
            cta: {
                title: "Ready to Improve Your Security?",
                content: "Start with our practical prevention guide to build a strong foundation for your digital safety.",
                button: "Start Your Security Journey"
            }
        },
        footer: {
            quick_links: "Quick Links",
            sources_credits: "Sources & Credits",
            copyright: "Educational content for cybersecurity awareness.",
            cisa_link: "CISA Cybersecurity",
            owasp_link: "OWASP Top 10",
            eff_link: "EFF Privacy Guides",
            hibp_link: "Have I Been Pwned"
        }
    },
    es: {
        meta: {
            site_name: "Centro de Seguridad Digital",
            home_title: "Centro de Seguridad Digital - Protégete en Línea",
            home_description: "Aprende habilidades esenciales de ciberseguridad para protegerte de amenazas en línea. Recursos gratuitos, guías prácticas y herramientas de aprendizaje interactivas.",
            threats_title: "Amenazas Comunes en Línea - Centro de Seguridad Digital",
            threats_description: "Aprende sobre amenazas comunes de ciberseguridad incluyendo phishing, malware, ransomware e ingeniería social. Guías interactivas para mantenerte seguro.",
            prevention_title: "Guía de Prevención de Ciberseguridad - Centro de Seguridad Digital",
            prevention_description: "Aprende técnicas esenciales de prevención de ciberseguridad incluyendo contraseñas fuertes, autenticación de dos factores, navegación segura y respaldos regulares.",
            resources_title: "Recursos y Herramientas de Ciberseguridad - Centro de Seguridad Digital",
            resources_description: "Colección curada de herramientas, guías y recursos de ciberseguridad de organizaciones confiables como CISA, EFF y OWASP.",
            about_title: "Acerca de - Centro de Seguridad Digital",
            about_description: "Aprende sobre la misión del Centro de Seguridad Digital para proporcionar educación y recursos de ciberseguridad accesibles para todos."
        },
        common: {
            logo: "Centro de Seguridad Digital",
            select_language: "Seleccionar idioma",
            toggle_menu: "Alternar menú de navegación",
            back_to_top: "Volver arriba",
            learn_more: "Saber Más",
            show_less: "Mostrar Menos"
        },
        nav: {
            home: "Inicio",
            threats: "Amenazas",
            prevention: "Prevención",
            resources: "Recursos",
            about: "Acerca de",
            common_threats: "Amenazas Comunes",
            protection_guide: "Guía de Protección",
            tools_resources: "Herramientas y Recursos",
            about_site: "Acerca de Este Sitio"
        },
        hero: {
            title: "DEFIÉNDETE CONTRA AMENAZAS CIBERNÉTICAS",
            description: "Aprende habilidades esenciales de ciberseguridad para mantenerte seguro en línea. Descubre amenazas, domina técnicas de prevención y accede a recursos confiables, todo en un solo lugar."
        },
        buttons: {
            explore_threats: "EXPLORAR AMENAZAS",
            start_protecting: "COMENZAR PROTECCIÓN",
            learn_more: "SABER MÁS",
            view_resources: "VER RECURSOS",
            quick_scan: "ESCANEO RÁPIDO"
        },
        features: {
            title: "Por Qué Importa la Seguridad Digital",
            personal_data: {
                title: "Protección de Datos Personales",
                description: "Tu información personal es valiosa. Aprende cómo mantener privados y seguros tus datos, fotos y comunicaciones."
            },
            financial_security: {
                title: "Seguridad Financiera",
                description: "Protege tus cuentas bancarias, tarjetas de crédito y pagos digitales del fraude y acceso no autorizado."
            },
            identity_safety: {
                title: "Seguridad de Identidad",
                description: "Prevén el robo de identidad y protege tu reputación en línea de actores maliciosos y estafadores."
            }
        },
        demo: {
            title: "Identifica el Email de Phishing",
            description: "¡Pon a prueba tus habilidades! Pasa el cursor sobre diferentes partes de este email sospechoso para aprender qué lo hace peligroso.",
            results_title: "🚨 ¡Este es un email de phishing! Aquí está el por qué:",
            warning_signs: [
                "Dominio del remitente sospechoso",
                "Lenguaje urgente y amenazante",
                "Saludo genérico",
                "Enlaces sospechosos",
                "Errores gramaticales"
            ],
            email: {
                from_label: "De:",
                from_address: "security@verify-account-bank.com",
                from_tooltip: "Remitente sospechoso: no coincide con el dominio del banco reclamado",
                subject_label: "Asunto:",
                subject_text: "URGENTE: Su cuenta será cerrada en 24 horas",
                subject_tooltip: "Lenguaje urgente diseñado para crear pánico",
                greeting: "Estimado Cliente,",
                body_line1: "Detectamos actividad sospechosa en su cuenta.",
                body_line1_tooltip: "Saludo genérico - los bancos legítimos usan su nombre real",
                body_line2: "Debe verificar su identidad inmediatamente o su cuenta será cerrada permanentemente.",
                body_line2_tooltip: "Creando falsa urgencia para presionar acción rápida",
                body_link: "Haga clic aquí para verificar su cuenta",
                body_link_tooltip: "Pase el cursor para ver: enlace malicioso disfrazado como URL bancaria legítima",
                body_line3: "Gracias por su cooperación.",
                body_line3_tooltip: "Mala gramática y errores ortográficos son señales de alerta"
            }
        },
        threats: {
            page_title: "Amenazas Comunes en Línea",
            page_description: "Entender las amenazas es el primer paso hacia la protección. Haz clic en cada amenaza a continuación para aprender a reconocerla y defenderte contra ella.",
            phishing: {
                title: "Phishing",
                summary: "Emails y sitios web fraudulentos diseñados para robar tu información personal.",
                details: {
                    what_is: "¿Qué es el Phishing?",
                    what_description: "Los ataques de phishing usan emails, textos o sitios web engañosos que parecen ser de organizaciones legítimas para engañarte y revelar información sensible como contraseñas, números de tarjetas de crédito o números de seguro social.",
                    real_example: "Ejemplo Real",
                    example_description: "Un email que dice ser de tu banco diciendo \"Tu cuenta será cerrada a menos que verifiques tu información inmediatamente\" con un enlace a un sitio web bancario falso.",
                    warning_signs: "Señales de Advertencia",
                    warning_signs_list: [
                        "Lenguaje urgente o amenazante",
                        "Saludos genéricos (\"Estimado Cliente\")",
                        "Direcciones de remitente sospechosas",
                        "Adjuntos o enlaces inesperados",
                        "Mala gramática y ortografía"
                    ],
                    protection: "Cómo Protegerte",
                    protection_list: [
                        "Nunca hagas clic en enlaces de emails sospechosos",
                        "Escribe las URLs de sitios web directamente en tu navegador",
                        "Verifica solicitudes llamando directamente a la organización",
                        "Usa filtros de correo y protección contra spam",
                        "Mantén tu software actualizado"
                    ],
                    learn_more: "Saber Más",
                    source1: "Recursos de Phishing.org",
                    source2: "Mejores Prácticas de CISA"
                }
            },
            malware: {
                title: "Malware",
                summary: "Software malicioso que puede dañar tu computadora o robar tus datos.",
                details: {
                    what_is: "¿Qué es el Malware?",
                    what_description: "El malware es cualquier software intencionalmente diseñado para causar daño a una computadora, servidor, cliente o red de computadoras. Incluye virus, gusanos, caballos de Troya, spyware y ransomware.",
                    real_example: "Ejemplo Real",
                    example_description: "Una ventana emergente de actualización de software falsa que en realidad instala software keylogger para capturar todo lo que escribes, incluyendo contraseñas y números de tarjetas de crédito.",
                    warning_signs: "Señales de Advertencia",
                    warning_signs_list: [
                        "Computadora funcionando lentamente",
                        "Ventanas emergentes o anuncios inesperados",
                        "Programas abriéndose o cerrándose automáticamente",
                        "Archivos siendo eliminados o cifrados",
                        "Actividad de red inusual"
                    ],
                    protection: "Cómo Protegerte",
                    protection_list: [
                        "Usa software antivirus de buena reputación",
                        "Mantén tu sistema operativo actualizado",
                        "Descarga software solo de fuentes oficiales",
                        "Ten cuidado con los adjuntos de correo",
                        "Respaldos regulares del sistema"
                    ],
                    learn_more: "Saber Más",
                    source1: "Guía de Malware de CISA",
                    source2: "Guía de Seguridad de EFF"
                }
            },
            ransomware: {
                title: "Ransomware",
                summary: "Malware que cifra tus archivos y exige pago por la clave de descifrado.",
                details: {
                    what_is: "¿Qué es el Ransomware?",
                    what_description: "El ransomware es un tipo de malware que cifra archivos en tu computadora o red, haciéndolos inaccesibles hasta que pagues un rescate a los atacantes por la clave de descifrado.",
                    real_example: "Ejemplo Real",
                    example_description: "El ataque WannaCry en 2017 infectó cientos de miles de computadoras en todo el mundo, cifrando archivos y exigiendo pagos en Bitcoin. Afectó hospitales, empresas y sistemas gubernamentales.",
                    warning_signs: "Señales de Advertencia",
                    warning_signs_list: [
                        "Los archivos se vuelven inaccesibles o cifrados",
                        "Aparecen notas de rescate en tu pantalla",
                        "Las extensiones de archivo cambian a formatos inusuales",
                        "El rendimiento del sistema se degrada repentinamente",
                        "Actividad de red sospechosa"
                    ],
                    protection: "Cómo Protegerte",
                    protection_list: [
                        "Respaldos automáticos regulares (almacenamiento fuera de línea)",
                        "Mantén el software y los sistemas actualizados",
                        "Usa software de protección de endpoints",
                        "Capacita a los usuarios para reconocer intentos de phishing",
                        "Limita los privilegios de usuario y el acceso a la red"
                    ],
                    learn_more: "Saber Más",
                    source1: "Guía de Ransomware de CISA",
                    source2: "Informes de KrebsOnSecurity"
                }
            },
            social_engineering: {
                title: "Ingeniería Social",
                summary: "Manipulación psicológica para engañar a las personas a revelar información o realizar acciones.",
                details: {
                    what_is: "¿Qué es la Ingeniería Social?",
                    what_description: "La ingeniería social usa manipulación psicológica para engañar a las personas a divulgar información confidencial o realizar acciones que comprometen la seguridad, a menudo explotando emociones humanas como miedo, curiosidad o disposición a ayudar.",
                    real_example: "Ejemplo Real",
                    example_description: "Un llamador que finge ser del soporte técnico pidiendo tu contraseña para \"arreglar un problema del sistema\". Crean urgencia y autoridad para presionarte a cumplir.",
                    warning_signs: "Señales de Advertencia",
                    warning_signs_list: [
                        "Contacto no solicitado pidiendo información sensible",
                        "Crear falsa urgencia o situaciones de emergencia",
                        "Afirmar ser de figuras de autoridad",
                        "Ofrecer algo demasiado bueno para ser verdad",
                        "Jugar con emociones (miedo, codicia, simpatía)"
                    ],
                    protection: "Cómo Protegerte",
                    protection_list: [
                        "Verifica la identidad de cualquiera que solicite información",
                        "Sé escéptico del contacto no solicitado",
                        "Nunca des contraseñas o datos sensibles",
                        "Tómate tiempo para pensar antes de actuar",
                        "Sigue procedimientos de verificación establecidos"
                    ],
                    learn_more: "Saber Más",
                    source1: "Programa de Conciencia de CISA",
                    source2: "Autodefensa contra Vigilancia de EFF"
                }
            },
            weak_passwords: {
                title: "Contraseñas Débiles y Reutilizadas",
                summary: "Contraseñas simples o repetidas facilitan que los atacantes obtengan acceso a tus cuentas.",
                details: {
                    what_is: "¿Qué son las Contraseñas Débiles/Reutilizadas?",
                    what_description: "Las contraseñas débiles son fáciles de adivinar o descifrar, mientras que las contraseñas reutilizadas significan que si una cuenta está comprometida, los atacantes pueden acceder a todas tus otras cuentas usando la misma contraseña.",
                    real_example: "Ejemplo Real",
                    example_description: "Usar \"contraseña123\" o \"123456\" para tu correo, que puede ser descifrado en segundos. O usar la misma contraseña para tu correo, banca y cuentas de redes sociales.",
                    warning_signs: "Señales de Advertencia",
                    warning_signs_list: [
                        "Usar contraseñas comunes (contraseña, 123456, qwerty)",
                        "Usar información personal (cumpleaños, nombre, dirección)",
                        "Usar la misma contraseña en múltiples sitios",
                        "Contraseñas más cortas de 12 caracteres",
                        "Nunca cambiar contraseñas predeterminadas"
                    ],
                    protection: "Cómo Protegerte",
                    protection_list: [
                        "Usa contraseñas únicas para cada cuenta",
                        "Crea contraseñas largas y complejas (12+ caracteres)",
                        "Usa un administrador de contraseñas",
                        "Habilita la autenticación de dos factores",
                        "Cambia las contraseñas predeterminadas inmediatamente"
                    ],
                    learn_more: "Saber Más",
                    source1: "Verifica si tu contraseña está comprometida",
                    source2: "Directrices de Contraseñas de NIST"
                }
            },
            public_wifi: {
                title: "Wi-Fi Público Inseguro",
                summary: "Redes no seguras que permiten a los atacantes interceptar tus datos y comunicaciones.",
                details: {
                    what_is: "¿Qué son los Riesgos de Wi-Fi Público?",
                    what_description: "Las redes Wi-Fi públicas a menudo no están seguras, permitiendo que los ciberdelincuentes intercepten datos transmitidos por la red, roben información personal o inyecten malware en dispositivos conectados.",
                    real_example: "Ejemplo Real",
                    example_description: "Conectarse a \"Free_WiFi\" en una cafetería, que en realidad es operado por un hacker que puede ver toda tu actividad de navegación, capturar credenciales de inicio de sesión y robar datos personales.",
                    warning_signs: "Señales de Advertencia",
                    warning_signs_list: [
                        "Redes sin contraseñas",
                        "Nombres de red sospechosos (\"Free_WiFi\", \"Airport_WiFi\")",
                        "Múltiples redes con nombres similares",
                        "Solicitudes para instalar certificados o software",
                        "Ventanas emergentes pidiendo información personal"
                    ],
                    protection: "Cómo Protegerte",
                    protection_list: [
                        "Usa una VPN en redes públicas",
                        "Verifica los nombres de red con el personal",
                        "Evita acceder a cuentas sensibles",
                        "Desactiva la conexión automática a Wi-Fi",
                        "Usa tu punto de acceso móvil en su lugar"
                    ],
                    learn_more: "Saber Más",
                    source1: "Seguridad Wi-Fi de CISA",
                    source2: "Guías de Privacidad de EFF"
                }
            },
            cta: {
                title: "¿Listo para Protegerte?",
                description: "Ahora que conoces las amenazas, aprende cómo defenderte contra ellas.",
                button: "Ver Guía de Protección"
            }
        },
        prevention: {
            page_title: "Guía de Protección y Prevención",
            page_description: "Pasos prácticos para asegurar tu vida digital. Marca los elementos a medida que los completes para construir tu base de seguridad personal.",
            progress: {
                title: "Tu Progreso de Seguridad",
                of: "de",
                completed: "elementos completados"
            },
            categories: {
                passwords: {
                    title: "Seguridad de Contraseñas",
                    description: "Las contraseñas fuertes y únicas son tu primera línea de defensa",
                    items: {
                        manager: "Usa un administrador de contraseñas (recomendado: Bitwarden, 1Password, LastPass)",
                        manager_details: "Los administradores de contraseñas generan y almacenan contraseñas únicas y complejas para todas tus cuentas. Se sincronizan entre dispositivos y solo requieren que recuerdes una contraseña maestra.",
                        manager_link: "Guías de Contraseñas CISA",
                        unique: "Crea contraseñas únicas para cada cuenta (mínimo 12 caracteres)",
                        unique_details: "Reutilizar contraseñas significa que una violación compromete todas tus cuentas. Usa frases de contraseña como \"Café$Mañana#Paseo2024\" en lugar de combinaciones complejas de caracteres.",
                        defaults: "Cambia las contraseñas predeterminadas en todos los dispositivos y cuentas inmediatamente",
                        defaults_details: "Las contraseñas predeterminadas son a menudo bien conocidas o fáciles de adivinar (como \"admin\" o \"password\"). Esto incluye routers, dispositivos inteligentes y cuentas nuevas."
                    }
                },
                twofa: {
                    title: "Autenticación de Dos Factores (2FA)",
                    description: "Agrega una capa adicional de seguridad a tus cuentas más importantes",
                    items: {
                        email: "Habilita 2FA en cuentas de correo electrónico (Gmail, Outlook, Yahoo, etc.)",
                        email_details: "El correo electrónico se usa a menudo para restablecer contraseñas de otras cuentas, lo que lo convierte en un objetivo de alto valor. Usa aplicaciones de autenticación como Google Authenticator o Authy en lugar de SMS cuando sea posible.",
                        email_link: "Centro de Seguridad de Google",
                        banking: "Habilita 2FA en cuentas bancarias y financieras",
                        banking_details: "Las cuentas financieras contienen información sensible y acceso directo a tu dinero. La mayoría de los bancos y tarjetas de crédito ahora ofrecen opciones de 2FA a través de aplicaciones o mensajes de texto.",
                        social: "Habilita 2FA en cuentas de redes sociales (Facebook, Twitter, Instagram, etc.)",
                        social_details: "Las cuentas de redes sociales comprometidas pueden usarse para propagar malware, estafar a tus contactos o dañar tu reputación a través de suplantación de identidad.",
                        backup_codes: "Almacena códigos de respaldo en una ubicación segura (administrador de contraseñas o caja fuerte)",
                        backup_codes_details: "Los códigos de respaldo te permiten acceder a tus cuentas si pierdes tu teléfono o aplicación de autenticación. Almacénalos de forma segura y nunca los compartas."
                    }
                },
                updates: {
                    title: "Actualizaciones de Software y Mantenimiento",
                    description: "Mantén tus sistemas seguros con actualizaciones regulares",
                    items: {
                        operating_system: "Habilita actualizaciones automáticas para el sistema operativo (Windows, macOS, iOS, Android)",
                        operating_system_details: "Los parches de seguridad corrigen vulnerabilidades que los atacantes explotan. Las actualizaciones automáticas aseguran que obtengas estas correcciones tan pronto como estén disponibles.",
                        browsers: "Mantén los navegadores web actualizados (Chrome, Firefox, Safari, Edge)",
                        browsers_details: "Los navegadores son objetivos frecuentes de ataques. Las actualizaciones incluyen correcciones de seguridad y nuevas características de privacidad. La mayoría de los navegadores se actualizan automáticamente por defecto.",
                        antivirus: "Instala software antivirus de buena reputación y manténlo actualizado",
                        antivirus_details: "El antivirus moderno va más allá de la detección tradicional de virus para incluir protección en tiempo real, seguridad web y análisis de comportamiento. Windows Defender está incluido con Windows y es bastante efectivo."
                    }
                },
                browsing: {
                    title: "Hábitos de Navegación Segura",
                    description: "Desarrolla hábitos que te protejan mientras navegas por la web",
                    items: {
                        verify_urls: "Verifica las URLs de los sitios web antes de ingresar información sensible",
                        verify_urls_details: "Busca HTTPS (el ícono de candado), verifica errores tipográficos en nombres de dominio (como \"g00gle.com\") y escribe URLs directamente en lugar de hacer clic en enlaces en correos electrónicos.",
                        vpn: "Usa una VPN en redes Wi-Fi públicas",
                        vpn_details: "Las VPN cifran tu tráfico de internet, protegiéndolo de escuchas en redes no seguras. Las opciones populares incluyen NordVPN, ExpressVPN y ProtonVPN.",
                        official_sources: "Descarga software solo de fuentes oficiales (App Store, Google Play, sitios web oficiales)",
                        official_sources_details: "Los sitios de descarga de terceros a menudo incluyen malware con software legítimo. Apégate a tiendas de aplicaciones oficiales y sitios web de proveedores para las descargas."
                    }
                },
                backup: {
                    title: "Respaldo y Recuperación de Datos",
                    description: "Protege tus archivos importantes de pérdida o ransomware",
                    items: {
                        cloud: "Configura respaldo automático en la nube (iCloud, Google Drive, OneDrive)",
                        cloud_details: "Los respaldos en la nube protegen contra robo de dispositivos, daños y ransomware. La mayoría de los servicios ofrecen sincronización automática de carpetas y archivos importantes.",
                        offline: "Crea respaldos fuera de línea de datos críticos (disco duro externo, USB)",
                        offline_details: "Los respaldos fuera de línea proporcionan protección incluso si tu conexión a internet o servicio en la nube está comprometido. Sigue la regla 3-2-1: 3 copias, 2 tipos de medios diferentes, 1 fuera del sitio.",
                        test: "Prueba tus respaldos regularmente para asegurar que funcionen",
                        test_details: "Un respaldo solo es útil si realmente funciona. Prueba periódicamente restaurar archivos de tu respaldo para asegurar que el proceso funcione cuando lo necesites."
                    }
                }
            },
            completion: {
                title: "🎉 ¡Felicitaciones!",
                message: "Has completado todos los pasos esenciales de seguridad. ¡Tu seguridad digital ahora está significativamente mejorada!",
                print_button: "Imprimir Lista de Verificación de Seguridad"
            }
        },
        resources: {
            page_title: "Recursos y Herramientas",
            page_description: "Recursos de ciberseguridad, herramientas y guías confiables de organizaciones autorizadas. Haz clic en cualquier recurso para saber más.",
            sections: {
                government: {
                    title: "Recursos Gubernamentales y Oficiales",
                    description: "Orientación autorizada de agencias gubernamentales confiables",
                    cisa_best: {
                        title: "Mejores Prácticas de Ciberseguridad de CISA",
                        description: "Orientación oficial del gobierno de EE.UU. sobre fundamentos de ciberseguridad para individuos y organizaciones."
                    },
                    cisa_tools: {
                        title: "Herramientas Gratuitas de Ciberseguridad de CISA",
                        description: "Herramientas y recursos de seguridad gratuitos proporcionados por la Agencia de Ciberseguridad e Infraestructura."
                    },
                    nist: {
                        title: "Marco de Ciberseguridad de NIST",
                        description: "Marco integral para mejorar la gestión de riesgos de ciberseguridad del Instituto Nacional de Estándares."
                    }
                },
                organizations: {
                    title: "Organizaciones de Seguridad y Guías",
                    description: "Recursos especializados de organizaciones líderes en ciberseguridad",
                    owasp: {
                        title: "OWASP Top 10",
                        description: "Los riesgos de seguridad de aplicaciones web más críticos, actualizados regularmente por profesionales de seguridad mundiales."
                    },
                    eff: {
                        title: "Autodefensa contra Vigilancia de EFF",
                        description: "Guías expertas para protegerte a ti y a tus amigos de la vigilancia digital usando tecnología segura."
                    },
                    phishing: {
                        title: "Recursos de Phishing.org",
                        description: "Recursos educativos y materiales de entrenamiento para ayudar a reconocer y evitar ataques de phishing."
                    }
                },
                tools: {
                    title: "Herramientas y Verificadores de Seguridad",
                    description: "Herramientas prácticas para verificar tu seguridad y proteger tus datos",
                    hibp: {
                        title: "Have I Been Pwned",
                        description: "Verifica si tu correo electrónico o número de teléfono ha aparecido en violaciones de datos y monitorea incidentes futuros."
                    },
                    virus_total: {
                        title: "VirusTotal",
                        description: "Servicio gratuito en línea que analiza archivos y URLs en busca de malware usando múltiples motores antivirus."
                    },
                    password_checker: {
                        title: "Verificador de Fortaleza de Contraseñas",
                        description: "Prueba qué tan seguras son tus contraseñas y obtén sugerencias para crear otras más fuertes."
                    },
                    google_safety: {
                        title: "Centro de Seguridad de Google",
                        description: "Recursos integrales de seguridad y privacidad de Google, incluyendo herramientas de seguridad de cuentas, verificaciones de privacidad y orientación para mantenerse seguro en línea."
                    },
                    google_advanced: {
                        title: "Protección Avanzada de Google",
                        description: "Las protecciones de seguridad más fuertes de Google para usuarios que enfrentan amenazas elevadas en línea, incluyendo periodistas, activistas, líderes empresariales y equipos de campañas políticas."
                    }
                },
                news: {
                    title: "Noticias e Investigación de Seguridad",
                    description: "Mantente informado con las últimas noticias e investigaciones de ciberseguridad",
                    krebs: {
                        title: "KrebsOnSecurity",
                        description: "Periodismo investigativo de ciberseguridad por Brian Krebs, cubriendo las últimas amenazas, violaciones de datos e investigaciones de cibercrimenes con análisis profundo."
                    },
                    cisa_awareness: {
                        title: "Conciencia de Ciberseguridad de CISA",
                        description: "Programa de conciencia de ciberseguridad de CISA que proporciona recursos educativos, materiales de entrenamiento y campañas para mejorar la conciencia de ciberseguridad a nivel nacional."
                    }
                }
            },
            cta: {
                title: "¿Necesitas Ayuda para Comenzar?",
                description: "Consulta nuestra guía de prevención para un enfoque paso a paso para asegurar tu vida digital.",
                button: "Ver Guía de Prevención"
            }
        },
        about: {
            page_title: "Acerca del Centro de Seguridad Digital",
            page_description: "Empoderando a todos con el conocimiento y las herramientas para mantenerse seguros en el mundo digital.",
            mission: {
                title: "Nuestra Misión",
                content: "Digital Safety Hub fue creado para cerrar la brecha de conocimiento en ciberseguridad proporcionando información accesible, práctica y accionable para ayudar a las personas a protegerse en línea. Creemos que la educación en ciberseguridad debe estar disponible para todos, independientemente de su experiencia técnica.",
                content2: "En un mundo cada vez más conectado, las amenazas cibernéticas afectan a individuos, familias y comunidades todos los días. Nuestro objetivo es empoderar a las personas con el conocimiento y las herramientas que necesitan para reconocer amenazas, implementar medidas protectoras y responder efectivamente a incidentes de seguridad."
            },
            why: {
                title: "Por Qué Esto Importa",
                content: "El cibercrimen afecta a millones de personas cada año, con pérdidas que alcanzan miles de millones de dólares globalmente. Más allá del impacto financiero, los ataques cibernéticos pueden comprometer la privacidad personal, dañar reputaciones y causar estrés emocional significativo.",
                content2: "Muchos recursos de seguridad son demasiado técnicos para la persona promedio o demasiado básicos para ser verdaderamente útiles. Buscamos proporcionar el nivel correcto de detalle: suficiente para ser accionable, pero lo suficientemente accesible para que cualquiera pueda entender e implementar."
            },
            approach: {
                title: "Nuestro Enfoque",
                content: "Nos enfocamos en medidas de seguridad prácticas e implementables en lugar de conceptos abstractos. Cada recomendación incluye pasos claros, ejemplos del mundo real y enlaces a fuentes autorizadas para aprender más.",
                content2: "Nuestro contenido está diseñado para ser:",
                accessible: {
                    title: "Accesible:",
                    content: "Escrito en lenguaje sencillo sin jerga innecesaria"
                },
                actionable: {
                    title: "Accionable:",
                    content: "Enfocado en pasos específicos que puedes tomar hoy"
                },
                authoritative: {
                    title: "Autorizado:",
                    content: "Basado en orientación de organizaciones de seguridad confiables"
                },
                current: {
                    title: "Actual:",
                    content: "Actualizado regularmente para reflejar las últimas amenazas y mejores prácticas"
                }
            },
            sources: {
                title: "Fuentes de Contenido",
                content: "Toda la información en este sitio se deriva de fuentes autorizadas de ciberseguridad, incluyendo:",
                cisa: {
                    title: "CISA (Agencia de Ciberseguridad e Infraestructura):",
                    content: "Orientación oficial de ciberseguridad del gobierno de EE.UU."
                },
                nist: {
                    title: "NIST (Instituto Nacional de Estándares y Tecnología):",
                    content: "Marcos y estándares de ciberseguridad"
                },
                owasp: {
                    title: "OWASP (Proyecto de Seguridad de Aplicaciones Web Abiertas):",
                    content: "Mejores prácticas de seguridad de aplicaciones web"
                },
                eff: {
                    title: "EFF (Fundación Frontera Electrónica):",
                    content: "Recursos de privacidad y seguridad digital"
                },
                researchers: {
                    title: "Investigadores de seguridad líderes:",
                    content: "Inteligencia y análisis de amenazas actuales"
                },
                content2: "No creamos consejos de seguridad desde cero, sino que curamos, resumimos y presentamos orientación autorizada existente en un formato accesible."
            },
            principles: {
                title: "Nuestros Principios",
                accessibility: {
                    title: "Accesibilidad Primero",
                    content: "La seguridad no debería ser un privilegio. Hacemos que el conocimiento de ciberseguridad sea accesible para todos, independientemente de su experiencia técnica o nivel de experiencia."
                },
                evidence: {
                    title: "Basado en Evidencia",
                    content: "Cada recomendación está respaldada por fuentes autorizadas y mejores prácticas de seguridad establecidas. Citamos nuestras fuentes y fomentamos el aprendizaje adicional."
                },
                action: {
                    title: "Orientado a la Acción",
                    content: "El conocimiento sin acción no mejora la seguridad. Nos enfocamos en pasos prácticos que puedes implementar inmediatamente para mejorar tu seguridad digital."
                },
                current: {
                    title: "Siempre Actual",
                    content: "El panorama de amenazas evoluciona constantemente. Actualizamos regularmente nuestro contenido para reflejar nuevas amenazas, herramientas y mejores prácticas en ciberseguridad."
                }
            },
            disclaimers: {
                title: "Descargos Importantes",
                educational: {
                    title: "Propósito Educativo",
                    content: "Este sitio web está diseñado solo con fines educativos. Aunque nos esforzamos por la precisión y utilidad, la ciberseguridad es compleja y situacional. Siempre consulta con profesionales de ciberseguridad para necesidades específicas de seguridad o respuesta a incidentes."
                },
                guarantees: {
                    title: "Sin Garantías",
                    content: "Seguir la orientación en este sitio mejorará tu postura de seguridad, pero ninguna medida de seguridad es 100% efectiva. Las amenazas cibernéticas están en constante evolución, y atacantes determinados aún pueden encontrar formas de comprometer sistemas a pesar de las mejores prácticas."
                },
                links: {
                    title: "Enlaces Externos",
                    content: "Enlazamos a recursos externos de organizaciones confiables. Estos enlaces se proporcionan por conveniencia e información adicional. No somos responsables del contenido, prácticas de privacidad o seguridad de sitios web externos."
                },
                privacy: {
                    title: "Privacidad",
                    content: "Este sitio web no recopila información personal, usa cookies de seguimiento ni comparte datos con terceros. Creemos que la educación en privacidad debe venir con protección de privacidad."
                }
            },
            cta: {
                title: "¿Listo para Mejorar tu Seguridad?",
                content: "Comienza con nuestra guía práctica de prevención para construir una base sólida para tu seguridad digital.",
                button: "Comienza tu Viaje de Seguridad"
            }
        },
        footer: {
            quick_links: "Enlaces Rápidos",
            sources_credits: "Fuentes y Créditos",
            copyright: "Contenido educativo para conciencia de ciberseguridad.",
            cisa_link: "Ciberseguridad CISA",
            owasp_link: "OWASP Top 10",
            eff_link: "Guías de Privacidad EFF",
            hibp_link: "Have I Been Pwned"
        }
    },
    fr: {
        meta: {
            site_name: "Centre de Sécurité Numérique",
            home_title: "Centre de Sécurité Numérique - Protégez-Vous en Ligne",
            home_description: "Apprenez les compétences essentielles de cybersécurité pour vous protéger des menaces en ligne. Ressources gratuites, guides pratiques et outils d'apprentissage interactifs.",
            threats_title: "Menaces Communes en Ligne - Centre de Sécurité Numérique",
            threats_description: "Apprenez sur les menaces courantes de cybersécurité incluant le hameçonnage, les logiciels malveillants, les rançongiciels et l'ingénierie sociale. Guides interactifs pour rester en sécurité.",
            prevention_title: "Guide de Prévention de Cybersécurité - Centre de Sécurité Numérique",
            prevention_description: "Apprenez les techniques essentielles de prévention de cybersécurité incluant les mots de passe forts, l'authentification à deux facteurs, la navigation sécurisée et les sauvegardes régulières.",
            resources_title: "Ressources et Outils de Cybersécurité - Centre de Sécurité Numérique",
            resources_description: "Collection organisée d'outils, guides et ressources de cybersécurité d'organisations de confiance comme CISA, EFF et OWASP.",
            about_title: "À Propos - Centre de Sécurité Numérique",
            about_description: "Apprenez sur la mission du Centre de Sécurité Numérique pour fournir une éducation et des ressources de cybersécurité accessibles à tous."
        },
        common: {
            logo: "Centre de Sécurité Numérique",
            select_language: "Sélectionner la langue",
            toggle_menu: "Basculer le menu de navigation",
            back_to_top: "Retour en haut",
            learn_more: "En Savoir Plus",
            show_less: "Afficher Moins"
        },
        nav: {
            home: "Accueil",
            threats: "Menaces",
            prevention: "Prévention",
            resources: "Ressources",
            about: "À propos",
            common_threats: "Menaces Communes",
            protection_guide: "Guide de Protection",
            tools_resources: "Outils et Ressources",
            about_site: "À Propos de Ce Site"
        },
        hero: {
            title: "DÉFENDEZ-VOUS CONTRE LES CYBERMENACES",
            description: "Apprenez les compétences essentielles de cybersécurité pour rester en sécurité en ligne. Découvrez les menaces, maîtrisez les techniques de prévention et accédez à des ressources fiables, le tout en un seul endroit."
        },
        buttons: {
            explore_threats: "EXPLORER LES MENACES",
            start_protecting: "COMMENCER LA PROTECTION",
            learn_more: "EN SAVOIR PLUS",
            view_resources: "VOIR LES RESSOURCES",
            quick_scan: "SCAN RAPIDE"
        },
        features: {
            title: "Pourquoi la Sécurité Numérique Importe",
            personal_data: {
                title: "Protection des Données Personnelles",
                description: "Vos informations personnelles sont précieuses. Apprenez comment garder vos données, photos et communications privées et sécurisées."
            },
            financial_security: {
                title: "Sécurité Financière",
                description: "Protégez vos comptes bancaires, cartes de crédit et paiements numériques contre la fraude et l'accès non autorisé."
            },
            identity_safety: {
                title: "Sécurité de l'Identité",
                description: "Prévenez le vol d'identité et protégez votre réputation en ligne contre les acteurs malveillants et les escrocs."
            }
        },
        demo: {
            title: "Repérez l'Email de Phishing",
            description: "Testez vos compétences ! Survolez différentes parties de cet email suspect pour apprendre ce qui le rend dangereux.",
            results_title: "🚨 Ceci est un email de phishing ! Voici pourquoi :",
            warning_signs: [
                "Domaine d'expéditeur suspect",
                "Langage urgent et menaçant",
                "Salutation générique",
                "Liens suspects",
                "Erreurs de grammaire"
            ],
            email: {
                from_label: "De :",
                from_address: "security@verify-account-bank.com",
                from_tooltip: "Expéditeur suspect : ne correspond pas au domaine bancaire revendiqué",
                subject_label: "Objet :",
                subject_text: "URGENT : Votre compte sera fermé dans 24 heures",
                subject_tooltip: "Langage urgent conçu pour créer la panique",
                greeting: "Cher Client,",
                body_line1: "Nous avons détecté une activité suspecte sur votre compte.",
                body_line1_tooltip: "Salutation générique - les banques légitimes utilisent votre vrai nom",
                body_line2: "Vous devez vérifier votre identité immédiatement ou votre compte sera fermé définitivement.",
                body_line2_tooltip: "Créer une fausse urgence pour forcer une action rapide",
                body_link: "Cliquez ici pour vérifier votre compte",
                body_link_tooltip: "Survolez pour voir : lien malveillant déguisé en URL bancaire légitime",
                body_line3: "Merci pour votre coopération.",
                body_line3_tooltip: "Mauvaise grammaire et erreurs d'orthographe sont des signaux d'alarme"
            }
        },
        threats: {
            page_title: "Menaces Communes en Ligne",
            page_description: "Comprendre les menaces est la première étape vers la protection. Cliquez sur chaque menace ci-dessous pour apprendre à la reconnaître et à vous en défendre.",
            phishing: {
                title: "Hameçonnage",
                summary: "Emails et sites web frauduleux conçus pour voler vos informations personnelles.",
                details: {
                    what_is: "Qu'est-ce que l'Hameçonnage?",
                    what_description: "Les attaques de phishing utilisent des emails, textes ou sites web trompeurs qui semblent provenir d'organisations légitimes pour vous inciter à révéler des informations sensibles comme les mots de passe, numéros de cartes de crédit ou numéros de sécurité sociale.",
                    real_example: "Exemple Réel",
                    example_description: "Un email prétendant provenir de votre banque disant \"Votre compte sera fermé sauf si vous vérifiez vos informations immédiatement\" avec un lien vers un faux site bancaire.",
                    warning_signs: "Signes d'Alerte",
                    warning_signs_list: [
                        "Langage urgent ou menaçant",
                        "Salutations génériques (\"Cher Client\")",
                        "Adresses d'expéditeur suspectes",
                        "Pièces jointes ou liens inattendus",
                        "Mauvaise grammaire et orthographe"
                    ],
                    protection: "Comment vous Protéger",
                    protection_list: [
                        "Ne cliquez jamais sur les liens dans les emails suspects",
                        "Tapez les URLs des sites web directement dans votre navigateur",
                        "Vérifiez les demandes en appelant directement l'organisation",
                        "Utilisez des filtres email et une protection anti-spam",
                        "Gardez votre logiciel à jour"
                    ],
                    learn_more: "En Savoir Plus",
                    source1: "Ressources Phishing.org",
                    source2: "Meilleures Pratiques CISA"
                }
            },
            malware: {
                title: "Logiciel Malveillant",
                summary: "Logiciel malveillant qui peut endommager votre ordinateur ou voler vos données.",
                details: {
                    what_is: "Qu'est-ce qu'un Logiciel Malveillant?",
                    what_description: "Un logiciel malveillant est tout logiciel intentionnellement conçu pour causer des dommages à un ordinateur, serveur, client ou réseau informatique. Il comprend les virus, vers, chevaux de Troie, logiciels espions et rançongiciels.",
                    real_example: "Exemple Réel",
                    example_description: "Une fenêtre popup de mise à jour logicielle fausse qui installe en réalité un logiciel keylogger pour capturer tout ce que vous tapez, y compris les mots de passe et numéros de cartes de crédit.",
                    warning_signs: "Signes d'Alerte",
                    warning_signs_list: [
                        "Ordinateur fonctionnant lentement",
                        "Pop-ups ou publicités inattendus",
                        "Programmes s'ouvrant ou se fermant automatiquement",
                        "Fichiers supprimés ou chiffrés",
                        "Activité réseau inhabituelle"
                    ],
                    protection: "Comment vous Protéger",
                    protection_list: [
                        "Utilisez un logiciel antivirus réputé",
                        "Gardez votre système d'exploitation à jour",
                        "Téléchargez des logiciels uniquement depuis des sources officielles",
                        "Soyez prudent avec les pièces jointes email",
                        "Sauvegardes système régulières"
                    ],
                    learn_more: "En Savoir Plus",
                    source1: "Guide Malware CISA",
                    source2: "Guide de Sécurité EFF"
                }
            },
            ransomware: {
                title: "Rançongiciel",
                summary: "Logiciel malveillant qui chiffre vos fichiers et exige un paiement pour la clé de déchiffrement.",
                details: {
                    what_is: "Qu'est-ce qu'un Rançongiciel?",
                    what_description: "Le ransomware est un type de logiciel malveillant qui chiffre les fichiers sur votre ordinateur ou réseau, les rendant inaccessibles jusqu'à ce que vous payiez une rançon aux attaquants pour la clé de déchiffrement.",
                    real_example: "Exemple Réel",
                    example_description: "L'attaque WannaCry en 2017 a infecté des centaines de milliers d'ordinateurs dans le monde entier, chiffrant des fichiers et exigeant des paiements en Bitcoin. Elle a affecté des hôpitaux, des entreprises et des systèmes gouvernementaux.",
                    warning_signs: "Signes d'Alerte",
                    warning_signs_list: [
                        "Fichiers devenant inaccessibles ou chiffrés",
                        "Notes de rançon apparaissant sur votre écran",
                        "Extensions de fichiers changeant en formats inhabituels",
                        "Performance système se dégradant soudainement",
                        "Activité réseau suspecte"
                    ],
                    protection: "Comment vous Protéger",
                    protection_list: [
                        "Sauvegardes automatisées régulières (stockage hors ligne)",
                        "Gardez le logiciel et les systèmes à jour",
                        "Utilisez un logiciel de protection des terminaux",
                        "Formez les utilisateurs à reconnaître les tentatives de phishing",
                        "Limitez les privilèges utilisateur et l'accès réseau"
                    ],
                    learn_more: "En Savoir Plus",
                    source1: "Guide Rançongiciel CISA",
                    source2: "Rapports KrebsOnSecurity"
                }
            },
            social_engineering: {
                title: "Ingénierie Sociale",
                summary: "Manipulation psychologique pour inciter les gens à révéler des informations ou effectuer des actions.",
                details: {
                    what_is: "Qu'est-ce que l'Ingénierie Sociale?",
                    what_description: "L'ingénierie sociale utilise la manipulation psychologique pour inciter les gens à divulguer des informations confidentielles ou effectuer des actions qui compromettent la sécurité, exploitant souvent des émotions humaines comme la peur, la curiosité ou la disposition à aider.",
                    real_example: "Exemple Réel",
                    example_description: "Un appelant prétendant être du support informatique demandant votre mot de passe pour \"résoudre un problème système\". Ils créent de l'urgence et de l'autorité pour vous forcer à vous conformer.",
                    warning_signs: "Signes d'Alerte",
                    warning_signs_list: [
                        "Contact non sollicité demandant des informations sensibles",
                        "Créer une fausse urgence ou des situations d'urgence",
                        "Prétendre être des figures d'autorité",
                        "Offrir quelque chose de trop beau pour être vrai",
                        "Jouer sur les émotions (peur, cupidité, sympathie)"
                    ],
                    protection: "Comment vous Protéger",
                    protection_list: [
                        "Vérifiez l'identité de quiconque demande des informations",
                        "Soyez sceptique des contacts non sollicités",
                        "Ne donnez jamais de mots de passe ou de données sensibles",
                        "Prenez le temps de réfléchir avant d'agir",
                        "Suivez les procédures de vérification établies"
                    ],
                    learn_more: "En Savoir Plus",
                    source1: "Programme de Sensibilisation CISA",
                    source2: "Autodéfense Contre la Surveillance EFF"
                }
            },
            weak_passwords: {
                title: "Mots de Passe Faibles et Réutilisés",
                summary: "Mots de passe simples ou répétés facilitent l'accès des attaquants à vos comptes.",
                details: {
                    what_is: "Que sont les Mots de Passe Faibles/Réutilisés?",
                    what_description: "Les mots de passe faibles sont faciles à deviner ou à craquer, tandis que les mots de passe réutilisés signifient que si un compte est compromis, les attaquants peuvent accéder à tous vos autres comptes en utilisant le même mot de passe.",
                    real_example: "Exemple Réel",
                    example_description: "Utiliser \"motdepasse123\" ou \"123456\" pour votre email, qui peut être craqué en quelques secondes. Ou utiliser le même mot de passe pour votre email, banque et comptes de réseaux sociaux.",
                    warning_signs: "Signes d'Alerte",
                    warning_signs_list: [
                        "Utiliser des mots de passe courants (motdepasse, 123456, qwerty)",
                        "Utiliser des informations personnelles (année de naissance, nom, adresse)",
                        "Utiliser le même mot de passe sur plusieurs sites",
                        "Mots de passe plus courts que 12 caractères",
                        "Ne jamais changer les mots de passe par défaut"
                    ],
                    protection: "Comment vous Protéger",
                    protection_list: [
                        "Utilisez des mots de passe uniques pour chaque compte",
                        "Créez des mots de passe longs et complexes (12+ caractères)",
                        "Utilisez un gestionnaire de mots de passe",
                        "Activez l'authentification à deux facteurs",
                        "Changez les mots de passe par défaut immédiatement"
                    ],
                    learn_more: "En Savoir Plus",
                    source1: "Vérifiez si votre mot de passe est compromis",
                    source2: "Directives de Mots de Passe NIST"
                }
            },
            public_wifi: {
                title: "Wi-Fi Public Non Sécurisé",
                summary: "Réseaux non sécurisés qui permettent aux attaquants d'intercepter vos données et communications.",
                details: {
                    what_is: "Que sont les Risques Wi-Fi Public?",
                    what_description: "Les réseaux Wi-Fi publics sont souvent non sécurisés, permettant aux cybercriminels d'intercepter les données transmises sur le réseau, voler des informations personnelles ou injecter des logiciels malveillants dans les appareils connectés.",
                    real_example: "Exemple Réel",
                    example_description: "Se connecter à \"Free_WiFi\" dans un café, qui est en fait géré par un pirate qui peut voir toute votre activité de navigation, capturer les identifiants de connexion et voler des données personnelles.",
                    warning_signs: "Signes d'Alerte",
                    warning_signs_list: [
                        "Réseaux sans mots de passe",
                        "Noms de réseau suspects (\"Free_WiFi\", \"Airport_WiFi\")",
                        "Plusieurs réseaux avec des noms similaires",
                        "Demandes d'installation de certificats ou logiciels",
                        "Pop-ups demandant des informations personnelles"
                    ],
                    protection: "Comment vous Protéger",
                    protection_list: [
                        "Utilisez un VPN sur les réseaux publics",
                        "Vérifiez les noms de réseau avec le personnel",
                        "Évitez d'accéder à des comptes sensibles",
                        "Désactivez la connexion automatique au Wi-Fi",
                        "Utilisez votre point d'accès mobile à la place"
                    ],
                    learn_more: "En Savoir Plus",
                    source1: "Sécurité Wi-Fi CISA",
                    source2: "Guides de Confidentialité EFF"
                }
            },
            cta: {
                title: "Prêt à vous Protéger?",
                description: "Maintenant que vous connaissez les menaces, apprenez comment vous en défendre.",
                button: "Voir le Guide de Protection"
            }
        },
        prevention: {
            page_title: "Guide de Protection et Prévention",
            page_description: "Étapes pratiques pour sécuriser votre vie numérique. Cochez les éléments au fur et à mesure que vous les complétez pour construire votre fondation de sécurité personnelle.",
            progress: {
                title: "Votre Progrès de Sécurité",
                of: "sur",
                completed: "éléments complétés"
            },
            categories: {
                passwords: {
                    title: "Sécurité des Mots de Passe",
                    description: "Des mots de passe forts et uniques sont votre première ligne de défense",
                    items: {
                        manager: "Utilisez un gestionnaire de mots de passe (recommandé : Bitwarden, 1Password, LastPass)",
                        manager_details: "Les gestionnaires de mots de passe génèrent et stockent des mots de passe uniques et complexes pour tous vos comptes. Ils se synchronisent entre les appareils et ne nécessitent que de retenir un mot de passe maître.",
                        manager_link: "Directives CISA pour les Mots de Passe",
                        unique: "Créez des mots de passe uniques pour chaque compte (minimum 12 caractères)",
                        unique_details: "Réutiliser des mots de passe signifie qu'une violation compromet tous vos comptes. Utilisez des phrases de passe comme \"Café$Matin#Promenade2024\" au lieu de combinaisons complexes de caractères.",
                        defaults: "Changez immédiatement les mots de passe par défaut sur tous les appareils et comptes",
                        defaults_details: "Les mots de passe par défaut sont souvent bien connus ou faciles à deviner (comme \"admin\" ou \"password\"). Cela inclut les routeurs, les appareils intelligents et les nouveaux comptes."
                    }
                },
                twofa: {
                    title: "Authentification à Deux Facteurs (2FA)",
                    description: "Ajoutez une couche supplémentaire de sécurité à vos comptes les plus importants",
                    items: {
                        email: "Activez la 2FA sur les comptes de messagerie (Gmail, Outlook, Yahoo, etc.)",
                        email_details: "L'email est souvent utilisé pour réinitialiser les mots de passe d'autres comptes, ce qui en fait une cible de grande valeur. Utilisez des applications d'authentification comme Google Authenticator ou Authy au lieu des SMS quand c'est possible.",
                        email_link: "Centre de Sécurité Google",
                        banking: "Activez la 2FA sur les comptes bancaires et financiers",
                        banking_details: "Les comptes financiers contiennent des informations sensibles et un accès direct à votre argent. La plupart des banques et cartes de crédit offrent maintenant des options 2FA via des applications ou des messages texte.",
                        social: "Activez la 2FA sur les comptes de réseaux sociaux (Facebook, Twitter, Instagram, etc.)",
                        social_details: "Les comptes de réseaux sociaux compromis peuvent être utilisés pour propager des logiciels malveillants, escroquer vos contacts ou endommager votre réputation par usurpation d'identité.",
                        backup_codes: "Stockez les codes de sauvegarde dans un endroit sécurisé (gestionnaire de mots de passe ou coffre-fort)",
                        backup_codes_details: "Les codes de sauvegarde vous permettent d'accéder à vos comptes si vous perdez votre téléphone ou votre application d'authentification. Stockez-les en sécurité et ne les partagez jamais."
                    }
                },
                updates: {
                    title: "Mises à Jour Logicielles et Maintenance",
                    description: "Gardez vos systèmes sécurisés avec des mises à jour régulières",
                    items: {
                        operating_system: "Activez les mises à jour automatiques pour le système d'exploitation (Windows, macOS, iOS, Android)",
                        operating_system_details: "Les correctifs de sécurité corrigent les vulnérabilités que les attaquants exploitent. Les mises à jour automatiques garantissent que vous obtenez ces corrections dès qu'elles sont disponibles.",
                        browsers: "Gardez les navigateurs web à jour (Chrome, Firefox, Safari, Edge)",
                        browsers_details: "Les navigateurs sont des cibles fréquentes d'attaques. Les mises à jour incluent des correctifs de sécurité et de nouvelles fonctionnalités de confidentialité. La plupart des navigateurs se mettent à jour automatiquement par défaut.",
                        antivirus: "Installez un logiciel antivirus réputé et gardez-le à jour",
                        antivirus_details: "L'antivirus moderne va au-delà de la détection traditionnelle de virus pour inclure la protection en temps réel, la sécurité web et l'analyse comportementale. Windows Defender est inclus avec Windows et est assez efficace."
                    }
                },
                browsing: {
                    title: "Habitudes de Navigation Sécurisée",
                    description: "Développez des habitudes qui vous protègent en naviguant sur le web",
                    items: {
                        verify_urls: "Vérifiez les URLs des sites web avant de saisir des informations sensibles",
                        verify_urls_details: "Recherchez HTTPS (l'icône de cadenas), vérifiez les fautes de frappe dans les noms de domaine (comme \"g00gle.com\") et tapez les URLs directement au lieu de cliquer sur les liens dans les emails.",
                        vpn: "Utilisez un VPN sur les réseaux Wi-Fi publics",
                        vpn_details: "Les VPN chiffrent votre trafic internet, le protégeant de l'écoute clandestine sur les réseaux non sécurisés. Les options populaires incluent NordVPN, ExpressVPN et ProtonVPN.",
                        official_sources: "Téléchargez des logiciels uniquement depuis des sources officielles (App Store, Google Play, sites web officiels)",
                        official_sources_details: "Les sites de téléchargement tiers regroupent souvent des logiciels malveillants avec des logiciels légitimes. Tenez-vous aux magasins d'applications officiels et aux sites web des fournisseurs pour les téléchargements."
                    }
                },
                backup: {
                    title: "Sauvegarde et Récupération de Données",
                    description: "Protégez vos fichiers importants contre la perte ou les rançongiciels",
                    items: {
                        cloud: "Configurez une sauvegarde cloud automatique (iCloud, Google Drive, OneDrive)",
                        cloud_details: "Les sauvegardes cloud protègent contre le vol d'appareils, les dommages et les rançongiciels. La plupart des services offrent une synchronisation automatique des dossiers et fichiers importants.",
                        offline: "Créez des sauvegardes hors ligne de données critiques (disque dur externe, USB)",
                        offline_details: "Les sauvegardes hors ligne fournissent une protection même si votre connexion internet ou service cloud est compromis. Suivez la règle 3-2-1 : 3 copies, 2 types de supports différents, 1 hors site.",
                        test: "Testez vos sauvegardes régulièrement pour vous assurer qu'elles fonctionnent",
                        test_details: "Une sauvegarde n'est utile que si elle fonctionne réellement. Essayez périodiquement de restaurer des fichiers depuis votre sauvegarde pour vous assurer que le processus fonctionne quand vous en avez besoin."
                    }
                }
            },
            completion: {
                title: "🎉 Félicitations !",
                message: "Vous avez complété toutes les étapes essentielles de sécurité. Votre sécurité numérique est maintenant considérablement améliorée !",
                print_button: "Imprimer la Liste de Vérification de Sécurité"
            }
        },
        resources: {
            page_title: "Ressources et Outils",
            page_description: "Ressources de cybersécurité, outils et guides fiables d'organisations autorisées. Cliquez sur n'importe quelle ressource pour en savoir plus.",
            sections: {
                government: {
                    title: "Ressources Gouvernementales et Officielles",
                    description: "Orientation faisant autorité d'agences gouvernementales de confiance",
                    cisa_best: {
                        title: "Meilleures Pratiques de Cybersécurité CISA",
                        description: "Orientation officielle du gouvernement américain sur les fondamentaux de cybersécurité pour les individus et organisations."
                    },
                    cisa_tools: {
                        title: "Outils Gratuits de Cybersécurité CISA",
                        description: "Outils et ressources de sécurité gratuits fournis par l'Agence de Cybersécurité et Infrastructure."
                    },
                    nist: {
                        title: "Cadre de Cybersécurité NIST",
                        description: "Cadre complet pour améliorer la gestion des risques de cybersécurité de l'Institut National des Standards."
                    }
                },
                organizations: {
                    title: "Organisations de Sécurité et Guides",
                    description: "Ressources expertes d'organisations de cybersécurité de premier plan",
                    owasp: {
                        title: "OWASP Top 10",
                        description: "Les risques de sécurité d'applications web les plus critiques, mis à jour régulièrement par des professionnels de sécurité mondiaux."
                    },
                    eff: {
                        title: "Autodéfense Contre la Surveillance EFF",
                        description: "Guides experts pour vous protéger et protéger vos amis de la surveillance numérique en utilisant une technologie sécurisée."
                    },
                    phishing: {
                        title: "Ressources Phishing.org",
                        description: "Ressources éducatives et matériaux de formation pour aider à reconnaître et éviter les attaques de phishing."
                    }
                },
                tools: {
                    title: "Outils et Vérificateurs de Sécurité",
                    description: "Outils pratiques pour vérifier votre sécurité et protéger vos données",
                    hibp: {
                        title: "Have I Been Pwned",
                        description: "Vérifiez si votre email ou numéro de téléphone a été compromis dans des violations de données et surveillez les incidents futurs."
                    },
                    virus_total: {
                        title: "VirusTotal",
                        description: "Service gratuit en ligne qui analyse les fichiers et URLs pour détecter les logiciels malveillants en utilisant plusieurs moteurs antivirus."
                    },
                    password_checker: {
                        title: "Vérificateur de Force de Mot de Passe",
                        description: "Testez la sécurité de vos mots de passe et obtenez des suggestions pour en créer de plus forts."
                    },
                    google_safety: {
                        title: "Centre de Sécurité Google",
                        description: "Ressources complètes de sécurité et confidentialité de Google, incluant des outils de sécurité de compte, vérifications de confidentialité et conseils pour rester en sécurité en ligne."
                    },
                    google_advanced: {
                        title: "Protection Avancée Google",
                        description: "Les protections de sécurité les plus fortes de Google pour les utilisateurs qui font face à des menaces élevées en ligne, incluant journalistes, activistes, dirigeants d'entreprise et équipes de campagnes politiques."
                    }
                },
                news: {
                    title: "Actualités et Recherche de Sécurité",
                    description: "Restez informé avec les dernières actualités et recherches de cybersécurité",
                    krebs: {
                        title: "KrebsOnSecurity",
                        description: "Journalisme d'investigation en cybersécurité par Brian Krebs, couvrant les dernières menaces, violations de données et enquêtes sur la cybercriminalité avec une analyse approfondie."
                    },
                    cisa_awareness: {
                        title: "Sensibilisation à la Cybersécurité CISA",
                        description: "Programme de sensibilisation à la cybersécurité de CISA fournissant des ressources éducatives, matériaux de formation et campagnes pour améliorer la sensibilisation à la cybersécurité au niveau national."
                    }
                }
            },
            cta: {
                title: "Besoin d'Aide pour Commencer?",
                description: "Consultez notre guide de prévention pour une approche étape par étape pour sécuriser votre vie numérique.",
                button: "Voir le Guide de Prévention"
            }
        },
        about: {
            page_title: "À Propos du Centre de Sécurité Numérique",
            page_description: "Donner à chacun les connaissances et les outils pour rester en sécurité dans le monde numérique.",
            mission: {
                title: "Notre Mission",
                content: "Digital Safety Hub a été créé pour combler le fossé des connaissances en cybersécurité en fournissant des informations accessibles, pratiques et exploitables pour aider les gens à se protéger en ligne. Nous croyons que l'éducation en cybersécurité devrait être disponible pour tous, quel que soit leur contexte technique.",
                content2: "Dans un monde de plus en plus connecté, les cybermenaces affectent les individus, les familles et les communautés chaque jour. Notre objectif est de donner aux gens les connaissances et les outils dont ils ont besoin pour reconnaître les menaces, mettre en œuvre des mesures de protection et répondre efficacement aux incidents de sécurité."
            },
            why: {
                title: "Pourquoi C'est Important",
                content: "La cybercriminalité affecte des millions de personnes chaque année, avec des pertes atteignant des milliards de dollars mondialement. Au-delà de l'impact financier, les cyberattaques peuvent compromettre la vie privée personnelle, endommager les réputations et causer un stress émotionnel significatif.",
                content2: "Beaucoup de ressources de sécurité sont soit trop techniques pour la personne moyenne, soit trop basiques pour être vraiment utiles. Nous visons à fournir le bon niveau de détail—assez pour être exploitable, mais suffisamment accessible pour que quiconque puisse comprendre et mettre en œuvre."
            },
            approach: {
                title: "Notre Approche",
                content: "Nous nous concentrons sur des mesures de sécurité pratiques et implémentables plutôt que sur des concepts abstraits. Chaque recommandation inclut des étapes claires, des exemples du monde réel et des liens vers des sources faisant autorité pour approfondir l'apprentissage.",
                content2: "Notre contenu est conçu pour être:",
                accessible: {
                    title: "Accessible:",
                    content: "Écrit en langage simple sans jargon inutile"
                },
                actionable: {
                    title: "Exploitable:",
                    content: "Axé sur des étapes spécifiques que vous pouvez entreprendre aujourd'hui"
                },
                authoritative: {
                    title: "Autoritaire:",
                    content: "Basé sur des orientations d'organisations de sécurité de confiance"
                },
                current: {
                    title: "Actuel:",
                    content: "Mis à jour régulièrement pour refléter les dernières menaces et meilleures pratiques"
                }
            },
            sources: {
                title: "Sources de Contenu",
                content: "Toutes les informations sur ce site sont dérivées de sources de cybersécurité faisant autorité, incluant:",
                cisa: {
                    title: "CISA (Agence de Cybersécurité et de Sécurité des Infrastructures):",
                    content: "Orientations officielles de cybersécurité du gouvernement américain"
                },
                nist: {
                    title: "NIST (Institut National des Standards et de la Technologie):",
                    content: "Cadres et standards de cybersécurité"
                },
                owasp: {
                    title: "OWASP (Projet de Sécurité des Applications Web Ouvertes):",
                    content: "Meilleures pratiques de sécurité des applications web"
                },
                eff: {
                    title: "EFF (Fondation Frontière Électronique):",
                    content: "Ressources de confidentialité et sécurité numériques"
                },
                researchers: {
                    title: "Chercheurs en sécurité de premier plan:",
                    content: "Renseignements et analyses de menaces actuelles"
                },
                content2: "Nous ne créons pas de conseils de sécurité à partir de zéro—nous curons, résumerons et présentons plutôt des orientations autoritaires existantes dans un format accessible."
            },
            principles: {
                title: "Nos Principes",
                accessibility: {
                    title: "Accessibilité d'Abord",
                    content: "La sécurité ne devrait pas être un privilège. Nous rendons les connaissances en cybersécurité accessibles à tous, quel que soit leur contexte technique ou niveau d'expérience."
                },
                evidence: {
                    title: "Basé sur les Preuves",
                    content: "Chaque recommandation est soutenue par des sources faisant autorité et des meilleures pratiques de sécurité établies. Nous citons nos sources et encourageons l'apprentissage supplémentaire."
                },
                action: {
                    title: "Orienté Action",
                    content: "La connaissance sans action n'améliore pas la sécurité. Nous nous concentrons sur des étapes pratiques que vous pouvez mettre en œuvre immédiatement pour améliorer votre sécurité numérique."
                },
                current: {
                    title: "Toujours Actuel",
                    content: "Le paysage des menaces évolue constamment. Nous mettons régulièrement à jour notre contenu pour refléter les nouvelles menaces, outils et meilleures pratiques en cybersécurité."
                }
            },
            disclaimers: {
                title: "Avertissements Importants",
                educational: {
                    title: "But Éducatif",
                    content: "Ce site web est conçu à des fins éducatives uniquement. Bien que nous nous efforcions d'être précis et utiles, la cybersécurité est complexe et situationnelle. Consultez toujours des professionnels de la cybersécurité pour des besoins spécifiques de sécurité ou de réponse aux incidents."
                },
                guarantees: {
                    title: "Aucune Garantie",
                    content: "Suivre les orientations sur ce site améliorera votre posture de sécurité, mais aucune mesure de sécurité n'est efficace à 100%. Les cybermenaces évoluent constamment, et des attaquants déterminés peuvent encore trouver des moyens de compromettre les systèmes malgré les meilleures pratiques."
                },
                links: {
                    title: "Liens Externes",
                    content: "Nous lions vers des ressources externes d'organisations de confiance. Ces liens sont fournis par commodité et pour des informations supplémentaires. Nous ne sommes pas responsables du contenu, des pratiques de confidentialité ou de la sécurité des sites web externes."
                },
                privacy: {
                    title: "Confidentialité",
                    content: "Ce site web ne collecte pas d'informations personnelles, n'utilise pas de cookies de suivi et ne partage pas de données avec des tiers. Nous croyons que l'éducation à la confidentialité devrait venir avec la protection de la confidentialité."
                }
            },
            cta: {
                title: "Prêt à Améliorer Votre Sécurité?",
                content: "Commencez avec notre guide pratique de prévention pour construire une fondation solide pour votre sécurité numérique.",
                button: "Commencez Votre Parcours de Sécurité"
            }
        },
        footer: {
            quick_links: "Liens Rapides",
            sources_credits: "Sources et Crédits",
            copyright: "Contenu éducatif pour la sensibilisation à la cybersécurité.",
            cisa_link: "Cybersécurité CISA",
            owasp_link: "OWASP Top 10",
            eff_link: "Guides de Confidentialité EFF",
            hibp_link: "Have I Been Pwned"
        }
    }
};

// Translation system
class TranslationSystem {
    constructor() {
        this.currentLanguage = this.loadLanguage();
        this.init();
    }

    init() {
        this.setupLanguageSelector();
        this.setLanguage(this.currentLanguage);
    }

    setupLanguageSelector() {
        const langToggle = document.getElementById('langToggle');
        const langDropdown = document.getElementById('langDropdown');
        const langOptions = document.querySelectorAll('.lang-option');

        if (langToggle && langDropdown) {
            langToggle.addEventListener('click', () => {
                langDropdown.classList.toggle('active');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (event) => {
                if (!langToggle.contains(event.target) && !langDropdown.contains(event.target)) {
                    langDropdown.classList.remove('active');
                }
            });
        }

        langOptions.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                this.setLanguage(lang);
                langDropdown.classList.remove('active');
            });
        });
    }

    setLanguage(lang) {
        if (!translations[lang]) return;

        this.currentLanguage = lang;
        this.saveLanguage(lang);
        this.updateCurrentLanguageDisplay(lang);
        this.translatePage(lang);

        // Simple fade animation for hero title if on homepage
        const heroTitle = document.getElementById('heroTitle');
        if (heroTitle && window.anime) {
            anime({
                targets: heroTitle,
                opacity: [heroTitle.style.opacity || 1, 0, 1],
                duration: 400,
                easing: 'easeInOutQuart'
            });
        }
    }

    updateCurrentLanguageDisplay(lang) {
        const currentLangElement = document.getElementById('currentLang');
        if (currentLangElement) {
            const langMap = { en: 'EN', es: 'ES', fr: 'FR' };
            currentLangElement.textContent = langMap[lang] || 'EN';
        }
    }

    translatePage(lang) {
        // Translate meta tags
        this.translateMetaTags(lang);
        
        // Cache all translatable elements once
        const allElements = document.querySelectorAll('[data-i18n], [data-i18n-attr], [data-i18n-tooltip]');
        const elementsMap = new Map();
        
        // Group elements by type for batch processing
        allElements.forEach(element => {
            const key = element.getAttribute('data-i18n') || 
                       element.getAttribute('data-i18n-attr-key') || 
                       element.getAttribute('data-i18n-tooltip');
            if (key) {
                if (!elementsMap.has(key)) {
                    elementsMap.set(key, []);
                }
                elementsMap.get(key).push(element);
            }
        });
        
        // Process translations in batches
        elementsMap.forEach((elements, key) => {
            const translation = this.getTranslation(lang, key);
            if (!translation) return;
            
            elements.forEach(element => {
                if (element.hasAttribute('data-i18n-tooltip')) {
                    element.setAttribute('data-tooltip', translation);
                } else if (element.hasAttribute('data-i18n-attr')) {
                    const attr = element.getAttribute('data-i18n-attr');
                    if (attr) element.setAttribute(attr, translation);
                } else if (Array.isArray(translation)) {
                    this.translateList(element, translation);
                } else if (typeof translation === 'object' && translation !== null) {
                    this.translateNestedContent(element, translation);
                } else {
                    const attr = element.getAttribute('data-i18n-attr');
                    if (attr) {
                        element.setAttribute(attr, translation);
                    } else if (element.getAttribute('data-i18n-html')) {
                        element.innerHTML = translation;
                    } else {
                        element.textContent = translation;
                    }
                }
            });
        });
        
        // Translate array items (list items with indices) - optimized
        const listItems = document.querySelectorAll('li[data-i18n]');
        listItems.forEach(item => {
            const key = item.getAttribute('data-i18n');
            if (key && /\.\d+$/.test(key)) {
                const translation = this.getTranslation(lang, key);
                if (translation) {
                    item.textContent = translation;
                }
            }
        });
    }
    
    translateMetaTags(lang) {
        const page = this.getCurrentPage();
        if (!page) return;
        
        const titleKey = `meta.${page}_title`;
        const descKey = `meta.${page}_description`;
        
        const title = this.getTranslation(lang, titleKey);
        const description = this.getTranslation(lang, descKey);
        
        if (title) {
            document.title = title;
            const titleElement = document.querySelector('title');
            if (titleElement) titleElement.textContent = title;
            const metaTitle = document.querySelector('meta[property="og:title"]');
            if (metaTitle) metaTitle.setAttribute('content', title);
        }
        
        if (description) {
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', description);
                // Also update if it has data-i18n attribute
                if (metaDesc.hasAttribute('data-i18n')) {
                    metaDesc.setAttribute('content', description);
                }
            }
            const ogDesc = document.querySelector('meta[property="og:description"]');
            if (ogDesc) ogDesc.setAttribute('content', description);
        }
        
        // Update html lang attribute
        document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : lang === 'es' ? 'es' : 'fr');
    }
    
    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('index.html') || path === '/' || path.endsWith('/')) return 'home';
        if (path.includes('threats.html')) return 'threats';
        if (path.includes('prevention.html')) return 'prevention';
        if (path.includes('resources.html')) return 'resources';
        if (path.includes('about.html')) return 'about';
        return 'home';
    }
    
    translateList(element, translationArray) {
        // For <ul> or <ol> elements
        if (element.tagName === 'UL' || element.tagName === 'OL') {
            const items = element.querySelectorAll('li');
            items.forEach((item, index) => {
                if (translationArray[index]) {
                    item.textContent = translationArray[index];
                }
            });
        }
    }
    
    translateArrayItems(lang) {
        // Translate list items with array indices
        const listItems = document.querySelectorAll('li[data-i18n]');
        listItems.forEach(item => {
            const key = item.getAttribute('data-i18n');
            // Check if key ends with array index pattern like .0, .1, etc.
            if (key && /\.\d+$/.test(key)) {
                const translation = this.getTranslation(lang, key);
                if (translation) {
                    item.textContent = translation;
                }
            }
        });
    }
    
    translateNestedContent(element, translationObj) {
        // Handle nested translation objects for complex HTML structures
        Object.keys(translationObj).forEach(key => {
            const child = element.querySelector(`[data-i18n-child="${key}"]`);
            if (child && translationObj[key]) {
                if (Array.isArray(translationObj[key])) {
                    this.translateList(child, translationObj[key]);
                } else {
                    child.textContent = translationObj[key];
                }
            }
        });
    }

    getTranslation(lang, key) {
        const keys = key.split('.');
        let current = translations[lang];

        for (const k of keys) {
            if (current && (current[k] !== undefined)) {
                current = current[k];
            } else {
                return null;
            }
        }

        return current;
    }

    saveLanguage(lang) {
        try {
            localStorage.setItem('digitalSafetyLanguage', lang);
        } catch (e) {
            console.warn('Could not save language preference:', e);
        }
    }

    loadLanguage() {
        try {
            return localStorage.getItem('digitalSafetyLanguage') || 'en';
        } catch (e) {
            console.warn('Could not load language preference:', e);
            return 'en';
        }
    }
}

// Initialize translation system when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.translationSystem = new TranslationSystem();
});