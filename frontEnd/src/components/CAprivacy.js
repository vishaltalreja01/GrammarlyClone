import React from 'react'
import "./Privacy.css"
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
const CAprivacy = () => {
    return (
        <>
            <Navbar />
            <div className='textcontain_'>


                <h2>Users in California, Nevada, and Brazil</h2>
                <p>This information supplements the information in our Privacy Policy and applies to California, Nevada, and Brazil residents.</p>
                <h3>Summary of information we collect</h3>
                <p>
                    Throughout the Privacy Policy, we discuss in detail the specific pieces of personal information we collect from and about users, the sources of that information, and how we share it. For the categories of personal information we collect, please see the section titled What Personal Information Does Writeophonic Collect and Process?. Our service providers and we use the categories of personal information we collect from and about you consistent with the various business and commercial purposes we discuss throughout this Privacy Policy—please see the section titled How Does Writeophonic Use Personal Information? for more details. Finally, for information about the categories of third parties with whom we share your information, see the section titled With Whom Does Writeophonic Share Your Information?.
                </p>
                <h3>Rights</h3>
                <p>
                    You may request that we:
                </p>
                <ul style={{ paddingInlineStart: '20px', listStyleType: 'none' }}>
                    <li style={{ marginBottom: '10px' }}>
                        <span style={{ color: 'green', marginRight: '5px' }}>&#10004;</span> Provide access to and a copy of certain information we hold about you.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <span style={{ color: 'green', marginRight: '5px' }}>&#10004;</span> Provide you with a summary of the categories of personal information we have collected or disclosed about you in the last twelve months; the categories of sources of such information; the business or commercial purpose for collecting or selling such information; and the categories of third parties with whom we shared such information.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <span style={{ color: 'green', marginRight: '5px' }}>&#10004;</span> Delete certain information we have about you.
                    </li>
                </ul>
                <p>
                    You may have the right to receive information about the financial incentives we offer you (if any). You also have the right not to be discriminated against, per applicable law, for exercising your rights. Certain information may be exempt from such requests under applicable law. For example, we need certain information to provide our products to you. If you ask us to delete it, you may no longer be able to access or use our products.
                </p>
                <p>
                    To exercise these rights, please see the Exercising Your Data Rights section of this Privacy Policy.
                </p>
                <p>
                    We do not sell personal information to third parties. We do share certain information as described in With Whom Does Writeophonic Share Your Information?, and we allow third parties to collect certain information about your activity, for example through cookies, as explained in our Cookie Policy. You can control these cookies through browser settings and other controls; for more information, see our Cookie Policy.
                </p>
            </div>


            <Footer />

        </>
    )
}

export default CAprivacy