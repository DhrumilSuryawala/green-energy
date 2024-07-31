document.addEventListener("DOMContentLoaded", () => {
    const contentData = {
        btn1: {
            headingContent: "Solar Power Installation",
            bodyText: "Solar power systems are becoming more affordable and efficient. By leveraging government subsidies and financing options, homeowners can install solar panels at a reduced cost and save on electricity bills over time. Additionally, advances in solar technology are continuously driving down costs and improving performance. As a result, investing in solar energy not only reduces long-term expenses but also contributes to a more sustainable and eco-friendly future.",
            imgUrl: "./img/img-1.jpg",
            imgAlt: "Solar panels"
        },
        btn2: {
            headingContent: "Wind Turbines",
            bodyText: "Small wind turbines are a great option for rural areas with consistent wind patterns. They can significantly reduce electricity costs and are increasingly cost-effective with advancements in technology.",
            imgUrl: "./img/img-2.jpg",
            imgAlt: "Wind turbines"
        },
        btn3: {
            headingContent: "Energy-Efficient Appliances",
            bodyText: "Investing in energy-efficient appliances can drastically cut down energy consumption. Many appliances now come with energy star ratings, helping consumers make informed choices that save money in the long run.",
            imgUrl: "./img/img-3.jpg",
            imgAlt: "Energy-efficient appliances"
        }
    };

    function preloader() {
        const imagesList = [
            "./img/img-1.jpg",
            "./img/img-2.jpg",
            "./img/img-3.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    }
    
    window.addEventListener("load", preloader);

    const buttons = document.querySelectorAll('.buttons button');
    const contentDiv = document.getElementById('content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const contentKey = button.id;
            contentDiv.innerHTML = `
                <h2>${contentData[contentKey].headingContent}</h2>
                <img src="${contentData[contentKey].imgUrl}" alt="${contentData[contentKey].imgAlt}">
                <p>${contentData[contentKey].bodyText}</p>
            `;
        });
    });
});
