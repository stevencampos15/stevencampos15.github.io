var arrLang = new Array();
arrLang['en'] = new Array();
arrLang['es'] = new Array();

// English content
//Menu
arrLang['en']['nav-inicio'] = 'Home';
arrLang['en']['nav-acerca'] = 'About';
arrLang['en']['nav-resume'] = 'Resume';
arrLang['en']['nav-servicios'] = 'Services';
arrLang['en']['nav-habilidades'] = 'Skills';
arrLang['en']['nav-proyectos'] = 'Projects';
arrLang['en']['nav-contacto'] = 'Contact';

//Carousel
arrLang['en']['carousel-hola'] = 'Hello!';
arrLang['en']['carousel-soy'] = 'I\u0027m';
arrLang['en']['carousel-pasion'] = 'Coding is my passion';
arrLang['en']['carousel-hireme'] = 'Hire me';
arrLang['en']['carousel-works'] = 'My Works';

arrLang['en']['carousel-hola2'] = 'Hi!';
arrLang['en']['carousel-ima'] = 'I\u0027m a';
arrLang['en']['carousel-developer'] = 'developer';
arrLang['en']['carousel-based'] = 'based in Santa Tecla, El Salvador';

//About Me Section
arrLang['en']['about-me'] = 'About Me';
arrLang['en']['about-desc'] = 'I\u0027m a young developer, always looking forward to learning more.';
arrLang['en']['about-name'] = 'Name:';
arrLang['en']['about-dob'] = 'Date of Birth:';
arrLang['en']['about-date'] = 'June 08, 1995';
arrLang['en']['about-address'] = 'Address:';
arrLang['en']['about-phone'] = 'Phone:';
arrLang['en']['about-years'] = 'Years Learning';
arrLang['en']['about-download'] = 'Download CV';

//Resume Section
arrLang['en']['resume-tech'] = 'Systems Engineering Technician';
arrLang['en']['resume-tech2'] = 'After graduating from high school I decided that the best option was a two-year Technician at ITCA, thanks to the tools and the methodology which was: theory and practice. I definitely learned a lot.';

arrLang['en']['resume-dipit'] = 'Diploma in IT Essentials';
arrLang['en']['resume-dipit2'] = 'While studying the technician I had the opportunity to participate in the CISCO dipolamado where I learned the basic fundamentals of the components of a computer and make it ready for a network.';

arrLang['en']['resume-dipccna'] = 'Diploma in CCNA';
arrLang['en']['resume-dipccna2'] = 'Upon completing the IT Essentials Diploma I was given the opportunity to participate in the CCNA Diploma, where I learned the basics of computer networking, which was very helpful and interesting.';

arrLang['en']['resume-dipjava'] = 'Diploma in JAVA';
arrLang['en']['resume-dipjava2'] = 'While studying for my degree at the Jos\u00E9 Mat\u00EDas Delgado University, my attention was drawn to the JAVA programming language, which is why I decided to get the Diploma in a place that I knew was reliable and guaranteed my learning quality.';

arrLang['en']['resume-bach'] = 'Bachelor of Information Technology';
arrLang['en']['resume-bach2'] = 'After learning about the field, I decided to complete the degree at a university where I knew that education included business education as well, their proposal was unique and different.';

arrLang['en']['resume-tbd'] = 'To Be Defined';
arrLang['en']['resume-tbd2'] = 'This year I am looking to expand my horizons, so I am looking for a new challenge.';

//Services Section
arrLang['en']['services'] = 'Services';
arrLang['en']['services-desc'] = 'These are the areas where I think I stand out and where I\u0027m looking for new challenges.';
arrLang['en']['services-web'] = 'Web Design';
arrLang['en']['services-mobile'] = 'Mobile App Developer';
arrLang['en']['services-webdev'] = 'Web Developer';
arrLang['en']['services-database'] = 'Database Design and Management';
arrLang['en']['services-desktop'] = 'Desktop Application Developer';
arrLang['en']['services-prevent'] = 'Preventive and Corrective Maintenance';

//Skills Section
arrLang['en']['skills'] = 'My Skills';
arrLang['en']['skills-desc'] = 'I always seek to improve and develop new skills';

//Projects Section
arrLang['en']['projects'] = 'My Projects';
arrLang['en']['projects-desc'] = 'Some of the projects I\u0027ve done';
arrLang['en']['projects-multi'] = 'Multiplatform Project';
arrLang['en']['projects-fact'] = 'Billing System';
arrLang['en']['projects-fact2'] = 'JAVA-Desktop';
arrLang['en']['projects-web'] = 'Web Project';
arrLang['en']['projects-web2'] = 'Web Design and Development';

arrLang['en']['projects-estoy'] = 'I\u0027m';
arrLang['en']['projects-com'] = 'Committed';
arrLang['en']['projects-hours'] = 'Learning Hours';
arrLang['en']['projects-clients'] = 'Clients to Satisfy';
arrLang['en']['projects-coffee'] = 'Cups of Coffee';
arrLang['en']['projects-ready'] = ' Ready';
arrLang['en']['projects-challenges'] = ' for New Challenges';
arrLang['en']['projects-contactme'] = 'Contact Me';

//Contact Section
arrLang['en']['contact-desc'] = 'You can take my information or feel free to fill out the form below and I will contact you.';
arrLang['en']['contact-location'] = 'Address';
arrLang['en']['contact-phone'] = 'Contact Number';
arrLang['en']['contact-email'] = 'Email Address';
arrLang['en']['contact-website'] = 'Website';

//Footer Section
arrLang['en']['footer-acerca'] = 'I\u0027m Steven Campos, a young developer who loves learning and looking for new challenges.';
arrLang['en']['footer-questions'] = 'Questions?';

//////////////////////////////
//Proceso para cambiar idioma
$(document).ready(function () {

    //Contenido en esp se captura
    $('.lang').each(function (index, item) {
        arrLang['es'][$(this).attr('key')] = $(this).text();
    });

    $('#languageSwitch').click(function () {

        if ($(this).prop("checked") == true) {
            $("#englishLabel").text("English");
            $('#englishLabel').css({ 'color': 'white' });
            $('.lang').each(function (index, item) {
                $(this).text(arrLang['en'][$(this).attr('key')]);

                //Cambiar placeholder de form
                $('#frmName').attr('placeholder', 'Your Name');
                $('#frmEmail').attr('placeholder', 'Your Email');
                $('#frmSubject').attr('placeholder', 'Subject');
                $('#frmMessage').attr('placeholder', 'Message');
                $('#frmSend').attr('value', 'Send Message');
            });

        }

        else if ($(this).prop("checked") == false) {
            $("#englishLabel").text("English");
            $('#englishLabel').css({ 'color': '#999999' });
            $('.lang').each(function (index, item) {
                $(this).text(arrLang['es'][$(this).attr('key')]);

                //Cambiar placeholder de form
                $('#frmName').attr('placeholder', 'Tu Nombre');
                $('#frmEmail').attr('placeholder', 'Tu Correo Electr\u00F3nico');
                $('#frmSubject').attr('placeholder', 'Asunto');
                $('#frmMessage').attr('placeholder', 'Mensaje');
                $('#frmSend').attr('value', 'Enviar Mensaje');
            });
        }
    });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos ) {
            document.getElementById("language").style.bottom = "0";
        } else {
            document.getElementById("language").style.bottom = "-50px";
        }
        prevScrollpos = currentScrollPos;
    }

    $("body").mouseleave(function () {
        $("#language").fadeOut(95);
    });
    $("body").mousemove(function () {
        $("#language").fadeIn(95);
    });

});