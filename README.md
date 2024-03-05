Scania Test for the Job position : "fullstack developer AI Enablement".
I got instructions available at this google drive: https://docs.google.com/document/d/1D2rc7hQs4WmlGRBs1f5fPO4RiJ3pzSDSqsmGGyY9f2c/edit?usp=sharing

Main Idea
Every machine, including trucks like those from Scania, requires regular maintenance after accumulating a certain number of hours or kilometers. This maintenance involves tasks such as changing oil filters, oil, ball bearings, air filters, and various other parts. Effective machine maintenance is crucial for businesses, ensuring smooth operations and minimizing maintenance costs, ultimately leading to increased profits across industries.

To address this need, my solution proposes an AI diagnostic tool that translates mechanical symptoms of trucks into root mechanical problems. This tool is designed to be accessible to operators, mechanical engineers, and technicians, whether they are in operational settings (such as mines or transportation) or in maintenance facilities (such as mechanical workshops). Users can access this application from any internet-connected device, be it a computer, mobile phone, or other devices.

By utilizing this tool, maintenance becomes more efficient and reliable, as it eliminates the potential for human error. Scania stands to benefit greatly from this concept, particularly by integrating advanced language models like ChatGPT through fine-tuning, thus enhancing the tool's capabilities and centralizing its maintenance operations.

About the development.
The application I developed, deployed on GitHub using the REACT-TYPESCRIPT framework. It uses also MUI Libriaries that are important to keep a decent style with minimal effort. Initially utilized REACT-REDUX to avoid the need for a backend. However, for improved usability and scalability, integrating a backend becomes essential. To achieve this, I recommend leveraging Google Cloud's Cloud Functions, offering scalable backend logic seamlessly integrated with the existing frontend. The files "LLMGenerator" and "LLMGeneratorfe" could serve as components of the backend solution, handling server-side tasks and frontend interactions, respectively. Google Cloud offers scalability, reliability, and security benefits, making it a robust choice for professional-grade solutions.

Now it is live in this adress: https://juanpablozunigahidalgo.github.io/scaniamantencionfe/

The code files are here: https://github.com/juanpablozunigahidalgo/scaniamantencionfe/tree/master

Limitations.
The application utilizes a CHAT GPT API key. I encountered several issues with it, primarily due to the lack of HTTPS availability. Theoretically, it should function properly with HTTPS and the correct API key.

Future steeps.
There are several potential next steeps. For instance:

-Scania can have its own LLM CHAT GPT AI Fine tune model that translate syntoms to root causes. this will be so powerfull since it can increase , only for scania, its market share by providing to their costumers top notch solutions to improve their business by lowering maintenance cost.

-Create user accounts. Password and User name. To provide different levels of services (And of course different revenue models).

-Use Images as well. Since parts can be correlated with images. And diagnotstic with images as well. CHAT GPT provde that with different modesl.

-Integration with IoT Sensors: Implementing integration with IoT sensors installed on Scania trucks can provide real-time data on various components' health and performance. This data can further enhance the accuracy of the AI diagnostic tool and enable predictive maintenance, reducing downtime and optimizing truck performance.

-Expansion to Other Industries: While initially focused on trucks, the AI diagnostic tool can be adapted and expanded to serve other industries beyond transportation, such as manufacturing, construction, and agriculture. This expansion opens up new market opportunities and revenue streams for Scania.

-Machine Learning Model Improvement: Continuously refine and improve the machine learning models powering the AI diagnostic tool by collecting feedback from users and incorporating new data. This iterative process ensures the tool's accuracy and effectiveness in diagnosing mechanical issues.

-Integration with Maintenance Management Systems: Integrate the AI diagnostic tool with existing maintenance management systems used by Scania and its customers. This integration streamlines the maintenance process, automates work order generation, and provides insights into historical maintenance data for better decision-making.

-Implementation of Predictive Analytics: Move beyond reactive maintenance towards predictive maintenance by leveraging the AI diagnostic tool's capabilities to analyze historical data and predict potential mechanical failures before they occur. This proactive approach can further reduce maintenance costs and downtime while extending the lifespan of Scania trucks.

-Localization and Multilingual Support: Adapt the AI diagnostic tool to support multiple languages and localize it to different regions where Scania operates. This ensures accessibility and usability for users worldwide, enhancing customer satisfaction and adoption of the tool.

-Collaboration with Third-Party Service Providers: Explore partnerships with third-party service providers, such as maintenance contractors or fleet management companies, to offer the AI diagnostic tool as part of their service offerings. This collaboration expands the tool's reach and provides additional value-added services to Scania customers.
