import React from 'react'
import './security.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const SecurityScreen = () => {
    return (
        <div>
        <Navbar/>
            <div className='secuity-main'>
                <div className='secuity-left'>
                    <p style={{color:'gray'}}>SECURITY</p>
                    <h1
                        style={{ fontSize: '50px', fontWeight: 'bolder' }}
                    >Keeping Your Writing Safe at Writeophonic</h1>
                    <p style={
                        { fontSize: '20px' }
                    }>We keep security at the heart of our product, infrastructure, and company policies. Thousands of organizations trust Writeophonic to power effective team-wide communication.</p>
                    <button
                        style={{
                            backgroundColor: "#FC832B",
                            color: "#fff",
                            borderRadius: "6px",
                            height: "48px",
                            padding: "8px 32px",
                            border: "0",
                            cursor: "pointer",
                            width: "200px",
                        }}
                    >
                        <span style={{ fontWeight: "bolder" }}>Contact Sales</span>
                    </button>
                </div>
                <div className='secuity-right'>
                    <img width="550px"
                        height="500px"
                        src="//images.ctfassets.net/1e6ajr2k4140/2VfUB0sFEuBI6WbPmibjhc/7640e01caaba40114bab694271cf83aa/img-hero_1.png?w=1280" alt="" />
                </div>
            </div>
            <div style={{
                padding: '20px',
                height: '400px',
            }}>
                <p style={{ textAlign: 'center', fontSize: '25px', color: 'gray' }}>Trusted by teams at</p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    height: '100px'
                }}>
                    <img src="//images.ctfassets.net/1e6ajr2k4140/2GndGpVF6xxEEW2yAta9Gq/ddecdb80ee3bb5a283c46d67439554e3/Brand_Atlassian__Type_Corporations__Mode_Light.svg" alt="" />
                    <img src="//images.ctfassets.net/1e6ajr2k4140/4TC0j9SdpZEm63Fd1UUGK8/6291b90f16a6c752b50a9e8d84ce121f/Brand_HackerOne__Type_Corporations__Mode_Light.svg" alt="" />
                    <img src="//images.ctfassets.net/1e6ajr2k4140/5LwcDLoEsYaVNMcM3WRWtP/e84b867df972cc04232b148bcfdfd255/Brand_Databricks__Type_Corporations__Mode_Light.svg" alt="" />
                    <img src="//images.ctfassets.net/1e6ajr2k4140/IIuV4Y07WxIddn16cp0mf/dcf413d67333ca3532e6ea7cec5d6d8b/Brand_Expensify__Type_Corporations__Mode_Light.svg" alt="" />
                    <img src="//images.ctfassets.net/1e6ajr2k4140/IIuV4Y07WxIddn16cp0mf/dcf413d67333ca3532e6ea7cec5d6d8b/Brand_Expensify__Type_Corporations__Mode_Light.svg" alt="" />
                </div>
            </div>
            <div style={
                {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',

                }
            }>
                <h1 style={{
                    textAlign: 'center',
                    fontSize: '45px',
                    width: '750px',
                }}>
                    Enterprise-grade attestation and regulatory compliance
                </h1>
                <div>
                    <div style={{
                        display: 'flex',

                        padding: '20px',
                        flexWrap: 'wrap',
                        gap: '20px',
                        width: '1000px',
                        marginLeft: '200px',
                    }}>
                        <img width="180px" style={{
                            boxShadow: '0px 0px 10px 0px lightgray',
                            borderRadius: '10px'
                        }}
                            height='180px' src="//images.ctfassets.net/1e6ajr2k4140/4x6Ckh4yzJVqKJv4Zn9D6g/ffde3deb869044bfd046aaf1d049e784/AICPA.png?w=1280" alt="" />
                        <img style={{
                            boxShadow: '0px 0px 10px 0px lightgray',
                            borderRadius: '10px'
                        }} width="180px" height='180px' src="//images.ctfassets.net/1e6ajr2k4140/55z4UR2GBhwP62zQk88393/9acf868c0b59054495601aaf9484a52f/Cert_025.png?w=1280" alt="" />
                        <img style={{
                            boxShadow: '0px 0px 10px 0px lightgray',
                            borderRadius: '10px'
                        }} width="180px" height='180px' src="//images.ctfassets.net/1e6ajr2k4140/4vnuNMG4GlOG7L8NoUKaHI/a7a2eae700fa8e637804eb426e495c82/Certi_026.png?w=1280" alt="" />
                        <img style={{
                            boxShadow: '0px 0px 10px 0px lightgray',
                            borderRadius: '10px'
                        }} width="180px" height='180px' src="//images.ctfassets.net/1e6ajr2k4140/3zdmozrbjxpu3iJ9kQN5c0/988130d26b0d59f493b0df3bd2c474f8/Cert_027.png?w=1280" alt="" />

                    </div>
                    <div style={{
                        display: 'flex',
                        padding: '20px',
                        flexWrap: 'wrap',
                        gap: '20px',
                        width: '1000px', marginLeft: '200px',
                    }}>
                        <img style={{
                            boxShadow: '0px 0px 10px 0px lightgray',
                            borderRadius: '10px'
                        }} width="180px" height='180px' src="//images.ctfassets.net/1e6ajr2k4140/2bdmF9hiJcdkZV41HzNkAk/3e456906d2d6c4a2692ffc92e7463628/Hippae_981.png?w=1280" alt="" />
                        <img style={{
                            boxShadow: '0px 0px 10px 0px lightgray',
                            borderRadius: '10px'
                        }} width="180px" height='180px' src="//images.ctfassets.net/1e6ajr2k4140/3wPmIN5kaoQNHGMyRNGT9u/7685f7702c4311498de569dd1eccfa22/PCI.png?w=1280" alt="" />
                        <img style={{
                            boxShadow: '0px 0px 10px 0px lightgray',
                            borderRadius: '10px'
                        }} width="180px" height='180px' src="//images.ctfassets.net/1e6ajr2k4140/7mmSr1h7sQJRLJ6Pqsdv6H/65b663bd918403ab01d51217f1abf96d/Star_Level_One.png?w=1280" alt="" />
                        <img style={{
                            boxShadow: '0px 0px 10px 0px lightgray',
                            borderRadius: '10px'
                        }} width="180px" height='180px' src="//images.ctfassets.net/1e6ajr2k4140/7uEwSmI8SAzpTTHNVNB1Bi/60cb523019dd84fb7be87f205a4e7c4a/GDPR.png?w=1280" alt="" />


                    </div>
                    <div style={{
                        display: 'flex',
                        padding: '20px',
                        flexWrap: 'wrap',
                        gap: '20px',
                        width: '1000px', marginLeft: '200px',
                    }}>
                        <img style={{
                            boxShadow: '0px 0px 10px 0px lightgray',
                            borderRadius: '10px'
                        }} width="180px" height='180px' src="//images.ctfassets.net/1e6ajr2k4140/1xj91rYWwgiagjl7jEjIwn/7e0f6ecf87e27d288ca42711da383684/CA_Privacy_Act.png?w=1280" alt="" />
                        <img style={{
                            boxShadow: '0px 0px 10px 0px lightgray',
                            borderRadius: '10px'
                        }} width="180px" height='180px' src="//images.ctfassets.net/1e6ajr2k4140/6r0BWaHtMajOPzLeLMShHq/f4d538b955a38667e93ffa12fd9eb237/Frame_1__7_.png?w=1280" alt="" />
                        <img style={{
                            boxShadow: '0px 0px 10px 0px lightgray',
                            borderRadius: '10px'
                        }} width="180px" height='180px' src="//images.ctfassets.net/1e6ajr2k4140/11Qr2RJGDklgfrHJPPfciJ/e746d7774699b7a7cadc6bb5c3a8ddd4/Frame_2__2_.png?w=1280" alt="" />

                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                // width: '100%',
                padding: '30px',
                marginBottom: '150px',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontFamily: ' inter,sans-serif',
                // backgroundColor: '#f5f5f5',
                marginTop: '100px'

            }}>
                <div style={{
                    width: '500px',
                    height: '200px',
                    marginBottom: '20px'
                }}>
                    <h4 style={{ fontSize: '1.125rem' }}
                    >SOC 2 (Type 2)</h4>
                    <p style={{ fontSize: '20px' }}>Writeophonic’s SOC 2 (Type 2) report validates our controls based on the security, privacy, availability, and confidentiality trust services criteria.</p>
                    <a href="" style={{ fontSize: '21px', color: 'blue' }}  >Learn More</a>
                </div>
                {/*  */}
                <div style={{
                    width: '500px',
                    height: '200px',
                    marginBottom: '20px'
                }}>
                    <h4 style={{ fontSize: '1.125rem' }}
                    >SOC 3</h4>
                    <p style={{ fontSize: '20px' }}>Writeophonic’s SOC 3 report validates our controls based on the security, privacy, availability, and confidentiality trust services criteria.</p>
                    <a href="" style={{ fontSize: '21px', color: 'blue' }}  >Learn More</a>
                </div>
                {/*  */}
                <div style={{
                    width: '500px',
                    height: '200px',
                    marginBottom: '20px'
                }}>
                    <h4 style={{ fontSize: '1.125rem' }}
                    >ISO/IEC 27001:2013</h4>
                    <p style={{ fontSize: '20px' }}>Writeophonic’s information security management system meets the requirements of ISO 27001 and 27002 international standards.
                    </p>
                    <a href="" style={{ fontSize: '21px', color: 'blue' }}  >Learn More</a>
                </div>
                <div style={{
                    width: '500px',
                    height: '200px', marginBottom: '20px'

                }}>
                    <h4 style={{ fontSize: '1.125rem' }}
                    >ISO/IEC 27017:2015</h4>
                    <p style={{ fontSize: '20px' }}>Writeophonic’s information security practices meet the requirements of ISO 27017 regarding our provision and use of cloud services.
                    </p>
                    <a href="" style={{ fontSize: '21px', color: 'blue' }}  >Learn More</a>
                </div>
                <div style={{
                    width: '500px',
                    height: '200px',
                    marginBottom: '20px'
                }}>
                    <h4 style={{ fontSize: '1.125rem' }}
                    >ISO/IEC 27018:2019</h4>
                    <p style={{ fontSize: '20px' }}>
                        Writeophonic meets the requirements of ISO 27018 regarding our protection of personally identifiable information (PII) in the cloud.</p>
                    <a href="" style={{ fontSize: '21px', color: 'blue' }}  >Learn More</a>
                </div>
                <div style={{
                    width: '500px',
                    height: '200px', marginBottom: '20px'
                }}>
                    <h4 style={{ fontSize: '1.125rem' }}
                    >HIPAA</h4>
                    <p style={{ fontSize: '20px' }}>Writeophonic is compliant with the Health Insurance Portability and Accountability Act.</p>
                    <a href="" style={{ fontSize: '21px', color: 'blue' }}  >Contact us about our Business Associate Agreement</a>
                </div>
                <div style={{
                    width: '500px',
                    height: '200px', marginBottom: '20px'
                }}>
                    <h4 style={{ fontSize: '1.125rem' }}
                    >PCI DSS</h4>
                    <p style={{ fontSize: '20px' }}> Writeophonic is compliant with the Payment Card Industry Data Security Standard.
                    </p>
                    <a href="" style={{ fontSize: '21px', color: 'blue' }}  >Learn More</a>
                </div>
                <div style={{
                    width: '500px',
                    height: '200px', marginBottom: '20px'
                }}>
                    <h4 style={{ fontSize: '1.125rem' }}
                    >Cloud Security Alliance</h4>
                    <p style={{ fontSize: '20px' }}>
                        Writeophonic is a CSA-Trusted Cloud Provider and has completed the Consensus Assessment Initiative Questionnaire to represent our security controls.</p>
                    <a href="" style={{ fontSize: '21px', color: 'blue' }}  >Learn More</a>
                </div>
                <div style={{
                    width: '500px',
                    height: '200px', marginBottom: '20px'
                }}>
                    <h4 style={{ fontSize: '1.125rem' }}
                    >GDPR</h4>
                    <p style={{ fontSize: '20px' }}>Writeophonic complies with the EU General Data Protection Regulation (GDPR).</p>
                    <a href="" style={{ fontSize: '21px', color: 'blue' }}  >Learn More</a>
                </div>
                <div style={{
                    width: '500px',
                    height: '200px', marginBottom: '20px'
                }}>
                    <h4 style={{ fontSize: '1.125rem' }}
                    >CCPA</h4>
                    <p style={{ fontSize: '20px' }}>Writeophonic complies with the California Consumer Privacy Act (CCPA).</p>
                    <a href="" style={{ fontSize: '21px', color: 'blue' }}  >Learn More</a>
                </div>
                <div style={{
                    width: '500px',
                    height: '200px', marginBottom: '20px'
                }}>
                    <h4 style={{ fontSize: '1.125rem' }}
                    >FERPA</h4>
                    <p style={{ fontSize: '20px' }}>
                        Writeophonic is compliant with the Family Educational Rights & Privacy Act.</p>
                    <a href="" style={{ fontSize: '21px', color: 'blue' }}  >Contact us about our special EDU addenda</a>
                </div>
                <div style={{
                    width: '500px',
                    height: '200px',
                    marginBottom: '20px'
                }}>
                    <h4 style={{ fontSize: '1.125rem' }}
                    >NYS Education Law 2-d</h4>
                    <p style={{ fontSize: '20px' }}>Writeophonic is compliant with the New York State Education Law 2-d.</p>
                    <a href="" style={{ fontSize: '21px', color: 'blue' }}  >Contact us about our special EDU addenda
                    </a>
                </div>
            </div>
            <div>
                <div style={
                    {

                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '20px',
                        paddingBottom: '20px'

                    }
                }>
                    <h1 style={{ fontSize: '45px' }}>Protecting your data and privacy</h1>
                    <p style={{ width: '600px', fontSize: '20px', textAlign: 'center' }}>Trust Writeophonic to protect your writing with care—we maintain security standards and procedures to keep your words safe.</p>
                    <a href="" style={{ width: '650px', color: 'blue', fontSize: '20px', textAlign: 'center' }}>Read our Trust Center to learn about our user-first approach to privacy and security.</a>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    // width: '100%',
                    padding: '30px',
                    marginBottom: '150px',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    fontFamily: ' inter,sans-serif',
                    // backgroundColor: '#f5f5f5',
                    marginTop: '100px'

                }}>
                    <div style={{
                        width: '500px',
                        height: '200px',
                        marginBottom: '20px'
                    }}>
                        <img src="//images.ctfassets.net/1e6ajr2k4140/5tRVOEUIHzUoW6nWoMgmEk/a28f28db60144ab3aed8e3bc036ee806/privacy.svg" alt="" />
                        <h4 style={{ fontSize: '1.125rem' }}
                        >Data security</h4>
                        <p style={{ fontSize: '20px' }}>
                            Through industry-standard data protection, secure infrastructure, and third-party verification, Writeophonic ensures data security across our product ecosystem.</p>

                    </div>
                    <div style={{
                        width: '500px',
                        height: '200px',
                        marginBottom: '20px'
                    }}>
                        <img src="//images.ctfassets.net/1e6ajr2k4140/6GRM4CqRi7gqU49KPZJs76/31591615d118223930d207d094601910/security.svg" alt="" />
                        <h4 style={{ fontSize: '1.125rem' }}
                        >Data ownership</h4>
                        <p style={{ fontSize: '20px' }}>Your words are yours—we do not, and will not, sell your or your team’s information. We don’t help third parties advertise their products to you.</p>

                    </div>
                </div>
            </div>
            <div style={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1c55b0',
                    color: 'white',
                    padding: '100px'
                }
            }>
                <h1 style={{ width: '900px', textAlign: 'center', fontSize: '50px' }}>Features that enhance security and control</h1>
                <p style={{ width: '700px', textAlign: 'center', fontSize: '21px' }}>Writeophonic Business includes safeguards to give control over account access—so you can trust that your company’s work is protected.</p>
                <div style={{ paddingTop: '100px' }}>
                    <img src="//images.ctfassets.net/1e6ajr2k4140/1MsDpXhewCPm68X5lOWfnh/a82ccc5a007594069bfb8546df807ed7/team-administration.png?w=1280" alt="" width='350' />
                    <img width='350px' src="//images.ctfassets.net/1e6ajr2k4140/1iEDRBpYS8ZeAu4trHaXu3/98b0cdc0a556a039fca5bf308e98f337/SAML-single-sign-on.png?w=1280" alt="" />
                    <img width='350px' src="//images.ctfassets.net/1e6ajr2k4140/3gh38iTcL7pFE8wdyHxVoA/7b599b974563f1a7d308e563b6aaa866/two-step-auth.png?w=1280" alt="" />
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                // width: '100%',
                alignItems: 'center',
                padding: '40px',
                height: '300px',
            }}>
                <p style={{ width: '700px', fontSize: '20px' }}>
                    “In a digital-first world, the quality of our writing is more important than ever before, and Writeophonic improves the quality and efficiency of how we communicate.”


                </p>
                <div style={{ marginLeft: '-200px' }}>
                    <img width='100px' style={{ borderRadius: '100%' }} src="//images.ctfassets.net/1e6ajr2k4140/6F9lHeVN4vT7h1fhkraWO4/2cf9072d37f74b87395fc55aa5687037/1657290179321.jpg" alt="" />
                    <p>

                        <span style={{ fontWeight: 'bolder' }}> Daniel Cane</span>
                        <br /> <span style={{ fontSize: '20px', color: 'gray' }}>CEO at ModMed</span>

                    </p>

                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                // width: '100%',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: '#f5f5f5',
                padding: '40px',

            }}>
                <h1 style={{ fontSize: '40px' }}>Secure infrastructure</h1>
                <p style={{ width: '800px', fontSize: '24px', textAlign: 'center' }}>Writeophonic’s infrastructure is built to protect your data according to high industry standards.</p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    gap: '20px',
                    padding: '80px',
                    paddingBottom: '130px'
                }}>
                    <div>
                        <img width="550px" style={{ marginTop: '30px' }} src="//images.ctfassets.net/1e6ajr2k4140/1NPoOOTSDP5PdE9E0UMh5u/575f5efdd8ab9a1f9beb55c2eba6e284/amazonwebservices-update.png?w=1280" alt="" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ height: '300px', width: '550px' }}>
                            <h2>Data hosting</h2>
                            <p style={{ fontSize: '22px' }}>Writeophonic hosts data in Amazon Web Services data centers in US East and US West regions and ensures continual product availability by using native backup tools. An industry-leading infrastructure provider, AWS is certified as compliant with ISO 27001 and has received a SOC 2 (Type 2) report.</p>
                        </div>
                        <div style={{ height: '300px', width: '550px' }}>
                            <h2>Data encryption</h2>
                            <p style={{ fontSize: '22px' }}>Writeophonic encrypts all data in transit and at rest. Data transfer is protected using the industry-standard TLS 1.2 protocol, while data at rest in AWS is encrypted using AES-256 server-side encryption. Writeophonic uses AWS Key Management Services for database encryption and secure key management.</p>
                        </div>
                        <div style={{ height: '300px', width: '550px' }}>
                            <h2>Cloud platform</h2>
                            <p style={{ fontSize: '22px' }}>All components that process your data operate in Writeophonic’s private network inside our secure cloud platform, and each Writeophonic user’s data is isolated from other users’ data. Writeophonic’s servers and network ports are behind load balancers and a web application firewall.</p>
                            <p style={{ fontSize: '22px' }}>Writeophonic thoroughly reviews all data subprocessors to conduct due diligence. <a href="" style={{ color: 'blue' }}>Read more</a> about the subprocessors Writeophonic uses.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                // width: '100%',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '100px',
            }}>
                <h1 style={{
                    fontSize: '45px',
                }}>
                    Security is embedded in our culture</h1>
                <p style={{
                    width: '700px',
                    fontSize: '22px',
                    textAlign: 'center'
                }}>
                    Maintaining a secure company, product, and infrastructure is top of mind at Writeophonic across teams and departments. Our rigorous security policies and procedures are woven into how we operate as an organization with integrity and ethics.
                </p>

                <a href="" style={{ fontSize: '22px', color: 'blue' }}>  Download our security whitepaper</a>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '40px',
                padding: '40px',
            }}>
                <div style={{ width: '350px' }}>
                    <img width='350px' src="//images.ctfassets.net/1e6ajr2k4140/12450BfC2RHkMzOVlSqESY/0aa3cf00ed6ed1cd8971ec4d359cd8d9/dedicatedTeam.png?w=1280" alt="" />
                    <h2>  Dedicated security team</h2>
                    <p style={{ fontSize: '22px' }}>Writeophonic’s in-house team of security specialists is focused on ensuring security across the company—in our product and infrastructure, as well as in all operations. The team also oversees risk management and standards compliance. Company executives are directly involved in overseeing security strategy.</p>
                </div>
                <div style={{ width: '350px', marginTop: '-60px' }}>
                    <img width='350px' src="//images.ctfassets.net/1e6ajr2k4140/2lq5QWg8eyixVvm7nA1DMo/7210a472a5ec0f91ba8606297867aa42/internalTraining__1_.png?w=1280" alt="" />
                    <h2>Internal training & monitoring</h2>
                    <p style={{ fontSize: '22px' }}>Writeophonic employees complete mandatory annual training on a wide range of privacy and security topics. In addition, our <a href="" style={{ color: 'blue' }}>Security Champions program</a> ensures that teams have an embedded security-focused adviser who drives team-specific security initiatives.</p>
                </div>
                <div style={{ width: '350px' }}>
                    <img width='350px' src="//images.ctfassets.net/1e6ajr2k4140/1I6Ij8BZJiYTFfnSBG7jSy/0248368873aceef87adb7e902bde6ad2/accessManagement.png?w=1280" alt="" />
                    <h2> Access management</h2>
                    <p style={{ fontSize: '22px' }}>Writeophonic adheres to the principle of least privilege—employees’ data access rights are regularly reviewed to ensure only minimum required privileges are granted. All workstations run on centrally controlled endpoint-management software that enforces security configurations and protection solutions.</p>
                </div>
            </div>
            <div>
                <h1 style={{
                    fontSize: '45px',
                    textAlign: 'center',
                }}>
                    Third-party validation</h1>
                <div style={{
                    display: 'flex',
                    padding: '100px',
                    gap: '40px',

                }}>
                    <div style={{ width: '500px' }}>
                        <h3>External penetration testing</h3>
                        <p style={{ fontSize: '22px' }}>  Writeophonic continually works to identify and fix security vulnerabilities in our product and infrastructure. That’s why we undergo third-party network penetration tests as well as AWS security and corporate infrastructure security assessments and audits.
                        </p>
                    </div>
                    <div style={{ width: '500px' }}>
                        <h3>Bug bounty program</h3>
                        <p style={{ fontSize: '22px' }}>Writeophonic’s ongoing <a href="">HackerOne bug bounty program</a> promotes transparency and provides a channel for external security researchers to identify potential security concerns. Our team responds rapidly—and resolves these issues before they can be exploited.
                        </p>
                        <p style={{ fontSize: '22px' }}>If you believe you've discovered a security-related issue, please <a href="">report it at HackerOne</a> or contact us at <a href="">security@Writeophonic.com</a>
                        </p>
                    </div>
                </div>

            </div>
            <div>
                <h1 style={{
                    fontSize: '45px',
                    textAlign: 'center',
                }}>
                    Read more about Writeophonic security</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '40px',
                    padding: '40px',
                }}>
                    <div style={{ width: '350px' }}>
                        <img width='350px' src="//images.ctfassets.net/1e6ajr2k4140/6yFgGm4vlmOKW3fpVKdw6e/69ca03676278bb32a7668ccef3a87faf/Screen_Shot_2023-03-16_at_1.15.12_PM.png?w=1280" alt="" />
                        <p style={{ color: 'gray' }}> COMPANY</p>
                        <h3>  Writeophonic Champions a User-First Approach to Protecting Data Security and Privacy
                        </h3>
                        <a href="" style={{ fontSize: '20px', color: 'blue' }}>Read More</a>
                    </div>
                    <div style={{ width: '350px', marginTop: '' }}>
                        <img width='350px' src="//images.ctfassets.net/1e6ajr2k4140/ewRta9RepaEGDMrBQreNE/cec038f51d590907130d3266f9cab7e0/Screen_Shot_2023-03-16_at_1.02.45_PM.png?w=1280" alt="" />
                        <p style={{ color: 'gray' }}> COMPANY</p>
                        <h3>Security Keys at Writeophonic Part 1: Why We Moved from OTP to FIDO2 for Team Member Authentication</h3>
                        <a href="" style={{ fontSize: '20px', color: 'blue' }}>Read More</a>
                    </div>
                    <div style={{ width: '350px' }}>
                        <img width='350px' src="//images.ctfassets.net/1e6ajr2k4140/1qyEAorAFAf5vaa6ateA1q/60e05203604f9858ecd730719e15bb21/Frame_1165__3_.png?w=1280" alt="" />
                        <p style={{ color: 'gray' }}> COMPANY</p>
                        <h3>Ethical Hackers Support Our Commitment to Security</h3>
                        <a href="" style={{ fontSize: '20px', color: 'blue' }}>Read More</a>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '40px',
                flexDirection: 'column',
                padding: '40px',
            }}>
                <h1 style={{fontSize:'45px',width:'600px',textAlign:'center'}}>
                    Ready to learn more about Writeophonic Business?
                </h1>
                <button
                        style={{
                            backgroundColor: "#FC832B",
                            color: "#fff",
                            borderRadius: "6px",
                            height: "48px",
                            padding: "8px 32px",
                            border: "0",
                            cursor: "pointer",
                            width: "200px",
                        }}
                    >
                        <span style={{ fontWeight: "bolder" }}>Contact Sales</span>
                    </button>
            </div>
            <Footer/>
        </div>
    )
}

export default SecurityScreen