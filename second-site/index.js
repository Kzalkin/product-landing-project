;(()=>{
    const searchBar = window.location.search;
    const inputs = new URLSearchParams(searchBar);
    const m_ign = inputs.get('ign');
    const m_email = inputs.get('email');

    let ign = document.querySelector('[ign]');
    let email = document.querySelector('[email]');

    if (m_ign && m_email) {
        ign.innerHTML = ign.innerHTML + " " + m_ign + "!";
        email.innerHTML = email.innerHTML + " " + m_email + " for more details.";
    }
})()