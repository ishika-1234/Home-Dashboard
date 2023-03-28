import React from 'react';
import "./HomeDashboard.css";

const HomeDashboard = () => {
    return (
        <>

            <div className='nav'>
                <div className='logo'>
                    <img src="/images/pic2.png" />
                </div>
                <div>
                    <h1>ASSET MANAGEMENT</h1>
                </div>
                <div>
                    <img src='/images/user.png' className='userlogo'></img>
                    <p className='name'>Ishika gupta</p>
                    <p className='Team'>IT Team</p>
                </div>


                <div>
                    <div className='Home'>
                        <div className='homelogo'>
                            <img src='/images/Vector.png'></img>
                        </div>
                        <a href=''>Home</a>
                    </div>
                    <div className='Assets'>
                        <div className='Assetslogo'>
                            <img src="/images/Iconly\Bold/Vector.png"></img>
                        </div>
                        <a>Assets</a>
                    </div>

                    <div className='Add'>
                        <div className='NewAssetslogo'>
                            <img src='/images/Vector3.png'></img>
                        </div>
                        <a>+Add New Asset</a>
                    </div>
                    <div className='Repair'>
                        <div className='Repairlogo'>
                            <img src='/images/Vector4.png'></img>
                        </div>
                        <a>Repair & Maintenance</a>
                    </div>
                    <div className='Reports'>
                        <div className='Reportslogo'>
                            <img src="/images/Iconly\Bold/Vector.png"></img>
                        </div>
                        <a>Download Reports</a>
                    </div>
                    <div className='ADMIN'>
                        <div className='adminlogo'>
                            <img src='/images/Vector5.png'></img>
                        </div>
                        <a>ADMIN</a>
                    </div>

                </div>

            </div>
            <div className='box'>

            </div>

        /* Section 2 */
            <section>
                <div className='NewAssets'>
                    <h2>New Assets Issue</h2>
                    <h3 className='heading3'>See All</h3>
                    <div className='smallbox'>
                        <img src='/images/user.png' className='smalluserimg'></img>
                        <p className='username'>Name- Ishika gupta</p>
                        <p className='role'>Role- <span>Application Developer</span></p>
                        <p className='emailid'>Email- <span>igupta@univ-wea.com</span></p>
                        <p className='joiningdate'>Joining Date- <span>23 JAN 2023</span></p>
                        <img src='/images/Vector arrow.png' className='arrow'></img>
                    </div>
                    <div className='smallbox2'>
                        <img src='/images/user 2.png' className='smalluserimg2'></img>
                        <p className='username2'>Name- Radhika rastogi</p>
                        <p className='role2'>Role- <span>Application Developer</span></p>
                        <p className='emailid2'>Email- <span>rrastogi@univ-wea.com</span></p>
                        <p className='joiningdate2'>Joining Date-<span>23 JAN 2023</span></p>
                        <img src='/images/Vector arrow.png' className='arrow2'></img>
                    </div>
                    <div className='smallbox3'>
                        <img src='/images/user 3.jpg' className='smalluserimg3'></img>
                        <p className='username3'>Name- Shashank singh rana</p>
                        <p className='role3'>Role- <span>Application Developer</span></p>
                        <p className='emailid3'>Email- <span>srana@univ-wea.com</span></p>
                        <p className='joiningdate3'>Joining Date- <span>01 FEB 2023</span></p>
                        <img src='/images/Vector arrow.png' className='arrow3'></img>
                    </div>
                    <div className='smallbox4'>
                        <img src='/images/user 4.jpg' className='smalluserimg4'></img>
                        <p className='username4'>Name- Satyam Kumar</p>
                        <p className='role4'>Role- <span>Application Developer</span></p>
                        <p className='emailid4'>Email- <span>skumar@univ-wea.com</span></p>
                        <p className='joiningdate4'>Joining Date- <span>01 FEB 2023</span></p>
                        <img src='/images/Vector arrow.png' className='arrow4'></img>
                    </div>
                    <div className='smallbox5'>
                        <img src='/images/user 5.jpg' className='smalluserimg5'></img>
                        <p className='username5'>Name- Rashi Sharma</p>
                        <p className='role5'>Role- <span>Application Developer</span></p>
                        <p className='emailid5'>Email- <span>rsharma@univ-wea.com</span></p>
                        <p className='joiningdate5'>Joining Date- <span>01 FEB 2023</span></p>
                        <img src='/images/Vector arrow.png' className='arrow5'></img>
                    </div>
                    <div className='smallbox6'>
                        <img src='/images/user 6.jpg' className='smalluserimg6'></img>
                        <p className='username6'>Name- Akhil Pathania</p>
                        <p className='role6'>Role- <span>Application Developer</span></p>
                        <p className='emailid6'>Email- <span>apathania@univ-wea.com</span></p>
                        <p className='joiningdate6'>Joining Date- <span>01 FEB 2023</span></p>
                        <img src='/images/Vector arrow.png' className='arrow6'></img>
                    </div>
                    <div className='smallbox7'>
                        <img src='/images/user.png' className='smalluserimg7'></img>
                        <p className='username7'>Name- Menka soni</p>
                        <p className='role7'>Role- <span>Backend Developer</span></p>
                        <p className='emailid7'>Email- <span>msoni@univ-wea.com</span></p>
                        <p className='joiningdate7'>Joining Date- <span>23 JAN 2023</span></p>
                        <img src='/images/Vector arrow.png' className='arrow7'></img>
                    </div>
                    <div className='smallbox8'>
                        <img src='/images/user 2.png' className='smalluserimg8'></img>
                        <p className='username8'>Name- Manish Kumar Mishra</p>
                        <p className='role8'>Role- <span>Sr.Backend Developer</span></p>
                        <p className='emailid8'>Email-<span>mmishra@univ-wea.com</span></p>
                        <p className='joiningdate8'>Joining Date- <span>23 JAN 2023</span></p>
                        <img src='/images/Vector arrow.png' className='arrow8'></img>
                    </div>
                    <div className='smallbox9'>
                        <img src='/images/user 9.jpg' className='smalluserimg9'></img>
                        <p className='username9'>Name- Ram Prasad</p>
                        <p className='role9'>Role- <span>Sr.Frontend Developer</span></p>
                        <p className='emailid9'>Email- <span>rprasad@univ-wea.com</span></p>
                        <p className='joiningdate9'>Joining Date- <span>23 JAN 2023</span></p>
                        <img src='/images/Vector arrow.png' className='arrow9'></img>
                    </div>
                </div>
            </section>

            <section>
                <div className='Totalassetsbox'>
                    <h4 className='tasset'>Total Assets</h4>
                    <button className='bt1'><span className='no'>442</span></button>
                    <img src='/images/Ellipse .png' class='ellipseimg1'></img>
                    <img src='/images/Multiple Devices.png' className='mulimg'></img>
                    <hr className='hr1'></hr>

                    <h4 className='Aasset'>Available Assets</h4>
                    <button className='bt2'><span className='no'>442</span></button>
                    <img src='/images/Ellipse .png' class='ellipseimg2'></img>
                    <img src='/images/Laptop Settings.png' className='lapset'></img>
                    <hr className='hr2'></hr>

                    <h4 className='istock'>In stock</h4>
                    <button className='bt3'><span className='no'>442</span></button>
                    <img src='/images/Ellipse .png' class='ellipseimg3'></img>
                    <img src='/images/Task Completed.png' className='taskcomp'></img>
                    <hr className='hr3'></hr>

                    <h4 className='Rmaintenance'>Repair and Maintenance</h4>
                    <button className='bt4'><span className='no'>442</span></button>
                    <img src='/images/Ellipse .png' class='ellipseimg4'></img>
                    <img src='/images/Computer Support.png' className='Comsup'></img>

                </div>
            </section>

            {/* Section 3 */}
            <section>
                <div className='tablebox'>
                    <h3 className='Repairmainheding'>Repair and Maintenance</h3>
                    <img src='/images/Search.png' className='searchicon'></img>
                    <h3 className='searchheading'>Tap to Search...</h3>
                    <a href='' className='seeall'>See All</a>
                </div>
                <table>
                    <tr className='headingbox'>
                        <th className='th1'> Name</th>
                        <th className='th2'>Employee ID</th>
                        <th className='th3'>Asset ID</th>
                        <th className='th4'>Model </th>
                        <th className='th5'>Date of Issue</th>
                        <th className='th6'>Department</th>
                        <th className='th7'>Action</th>
                    </tr>
                    <tr className='databox'>
                        <td className='td1'>Surya Pratap</td>
                        <td className='td2'>000134</td>
                        <td className='td3'>2084</td>
                        <td className='td4'>Logitech 7G2</td>
                        <td className='td5'>02 Mar 2023</td>
                        <td className='td6'>IT</td>
                        <td className='td7'><img src='/images/eyeicon.png'></img></td>
                        <td className='td8'><img src='/images/pencil.png'></img></td>
                        <td className='td9'><img src='/images/dot.png'></img></td>
                        <td className='td10'><img src='/images/dot.png'></img></td>
                        <td className='td11'><img src='/images/dot.png'></img></td>
                    </tr>

                    <tr className='databox1'>
                        <td className='td1'>Surya Pratap</td>
                        <td className='td2'>000134</td>
                        <td className='td3'>2084</td>
                        <td className='td4'>Logitech 7G2</td>
                        <td className='td5'>02 Mar 2023</td>
                        <td className='td6'>IT</td>
                        <td className='td7'><img src='/images/eyeicon.png'></img></td>
                        <td className='td8'><img src='/images/pencil.png'></img></td>
                        <td className='td9'><img src='/images/dot.png'></img></td>
                        <td className='td10'><img src='/images/dot.png'></img></td>
                        <td className='td11'><img src='/images/dot.png'></img></td>
                    </tr>
                    <tr className='databox2'>
                        <td className='td1'>Surya Pratap</td>
                        <td className='td2'>000134</td>
                        <td className='td3'>2084</td>
                        <td className='td4'>Logitech 7G2</td>
                        <td className='td5'>02 Mar 2023</td>
                        <td className='td6'>IT</td>
                        <td className='td7'><img src='/images/eyeicon.png'></img></td>
                        <td className='td8'><img src='/images/pencil.png'></img></td>
                        <td className='td9'><img src='/images/dot.png'></img></td>
                        <td className='td10'><img src='/images/dot.png'></img></td>
                        <td className='td11'><img src='/images/dot.png'></img></td>
                    </tr>
                    <tr className='databox3'>
                        <td className='td1'>Surya Pratap</td>
                        <td className='td2'>000134</td>
                        <td className='td3'>2084</td>
                        <td className='td4'>Logitech 7G2</td>
                        <td className='td5'>02 Mar 2023</td>
                        <td className='td6'>IT</td>
                        <td className='td7'><img src='/images/eyeicon.png'></img></td>
                        <td className='td8'><img src='/images/pencil.png'></img></td>
                        <td className='td9'><img src='/images/dot.png'></img></td>
                        <td className='td10'><img src='/images/dot.png'></img></td>
                        <td className='td11'><img src='/images/dot.png'></img></td>
                    </tr>


                </table>
            </section>

        </>
    );
}

export default HomeDashboard;