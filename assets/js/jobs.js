// Project data
const projects = [
    {
        company: "CVS Health Corporation",
        companyLogo: "https://www.cvshealth.com/content/dam/enterprise/cvs-enterprise/logos/cvs-health-mobile-app-2_edited.jpg",
        color: '#cc0000',
        role: "Sr SRE DevOps Engineer",
        date: "Sep 2024 - May 2025",
        desc: "",
        descBullets: [
            "Designed and implemented enterprise-scale infrastructure automation on Google Cloud Platform using Terraform, building secure multi-project environments with modular observability via Cloud Monitoring, Logging, OpenTelemetry, and custom SLO dashboards in Grafana, reducing onboarding time by 60%.",
            "Implemented monitoring-as-code, embedding observability into Terraform and CI/CD. Built Pub/Sub + BigQuery pipelines for real-time analytics and historical trends, driving proactive issue detection and business visibility.",
            "Developed self-service systems with GitHub Actions, FastAPI, and serverless functions to deploy scalable microservices and ML APIs. Integrated Trivy scans, IAM security, rollback automation, ensuring robust, secure pipelines.",
            "Drove PI planning & agile delivery, managed incidents with ServiceNow & JIRA, and boosted system resilience through chaos testing, alert tuning, and cost-optimized architectures."
        ]
    },
    {
        company: "Centene Corporation",
        companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Q82FRMhpG5nPsTOFP4srzmEScXn_hWWOfQ&s",
        color: '#024269',
        role: "Sr Software AI Engineer",
        date: "Jun 2023 - Sep 2024",
        desc: "",
        descBullets: [
            "Designed and deployed highly available, secure, multi-account AWS architectures using EC2, EKS, Lambda, RDS, CloudFormation, and more, while automating the full ML lifecycle on SageMaker—covering training, hyperparameter tuning, batch inference, and real-time monitoring",
            "Developed advanced CI/CD pipelines with GitLab, CodePipeline, Jenkins, and GitHub Actions, integrating automated builds, Trivy vulnerability scans, policy gates, and blue/green + canary deployments, ensuring reliable and secure software delivery.",
            "Created real-time observability stacks with CloudWatch, Prometheus, Grafana, Fluent Bit, OpenTelemetry, and automated alerting pipelines tied to SNS, ServiceNow, and Slack, enabling early detection and rapid incident resolution across multi-region deployments.",
            "Integrated HashiCorp Vault for dynamic secrets, enforced least privilege via IAM audits and KMS, conducted disaster recovery simulations, and used Python/Bash/AWS CLI scripts for infrastructure automation, cost optimization, and compliance validation."
        ]
    },
    {
        company: "USAA",
        companyLogo: "https://cdn.brandfetch.io/id7nXFaoJg/w/718/h/718/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
        color: '#00457C',
        role: "Site Reliability Engineer",
        date: "March 2020 - Feb 2023",
        desc: "",
        descBullets: [
            "Architected unified observability using Azure Monitor, Log Analytics, Application Insights, Splunk, and Grafana, building distributed tracing, real-time dashboards, and SLO-driven alerting to ensure high availability and rapid incident resolution.",
            "Managed production-grade AKS clusters, containerized .NET Core & Java microservices with Docker & Helm, and implemented multi-stage Azure DevOps pipelines with integrated SonarQube, WhiteSource, and rollback protections, driving consistent deployments across 10+ teams.",
            "Developed modular Terraform templates and integrated them with Azure DevOps for provisioning AKS, VNets, and policy-governed infrastructure. Enforced governance using OPA, tflint, and terraform-docs, ensuring audit compliance and secure multi-environment deployments.",
            "Built PowerShell modules and Azure Logic Apps to automate VM provisioning, incident remediation, and health checks (AKS nodes, DNS, SSL). Conducted vulnerability scans, patch validations, and hybrid connectivity reviews, safeguarding workloads across cloud and on-prem."

        ]
    },
    {
        company: "Maximus Inc",
        companyLogo: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2023/07/maximus.jpg",
        color: '#A020F0',
        role: "Cloud Data Engineer",
        date: "Jan 2018 - March 2020",
        desc: "",
        descBullets: [
            "Designed end-to-end data pipelines on AWS using Glue, Redshift, PySpark, and Airflow DAGs, processing both structured and unstructured data with encryption & schema management to ensure secure, scalable analytics workflows.",
            "Integrated Kafka, Kinesis, and EMR Spark to process massive datasets (500M+ records), combining streaming IoT and transactional data with historical loads, and optimizing with partitioning, materialized views, and Snowflake schemas for high-speed querying.",
            "Implemented robust logging, auditing, and traceability using CloudTrail, SNS, and S3, with orchestration via EventBridge, Lambda, and Step Functions, ensuring compliance and automated recovery across 40+ workflows.",
            "Developed advanced Power BI and Tableau dashboards on curated Redshift & Athena datasets, translating business rules into actionable metrics for executive teams, and empowering self-service analytics for non-technical users."
        ]
    },
    {
        company: "Huntington bank",
        companyLogo: "https://logosandtypes.com/wp-content/uploads/2020/07/huntington.png",
        color: '#5BA63C',
        role: "DevOps Engineer",
        date: "Oct 2016 - Dec 2017",
        desc: "",
        descBullets: [
            "Designed and deployed secure, highly available AWS architectures using EC2, S3, RDS, EBS, ELB, Auto Scaling, and advanced DNS routing via Direct Connect, optimizing performance and cost for large-scale deployments.",
            "Implemented a multi-layer security model with WAF, KMS, IAM, Lambda, automated threat detection, and centralized ECR vulnerability scanning for secure container operations across environments.",
            "Developed Jenkins pipelines for automated Docker builds and ECR publishing, established Dynatrace SLA monitoring integrated with custom AWS metrics, and deployed robust log analysis stacks with ELK, CloudWatch, Splunk, and Kinesis.",
            "Wrote Python and Perl scripts for database updates, file manipulations, and automated email workflows, streamlining ETL and operational data tasks across distributed systems."
        ]
    },
    {
        company: "Gramercy Soft Tech",
        companyLogo: "https://media.licdn.com/dms/image/v2/D4E0BAQGLKYymEJjb2g/company-logo_200_200/company-logo_200_200/0/1706302839498/gramercytech_logo?e=1756944000&v=beta&t=qO-fEouWqGEWsP049-flpap74jbVwNahyNbKmWyJ_Ac",
        color: '#0000ff',
        role: "Build & Release Engineer",
        date: "April 2015 - Oct 2016",
        desc: "",
        descBullets: [
            "Built robust AWS environments with EC2, S3, RDS, EBS, ELB, and Auto Scaling, optimizing resources for cost-effective, high-performance deployments.",
            "Implemented end-to-end CI/CD pipelines with Jenkins, GIT, and ANT, managing versioning, branching, tagging, and artifact workflows to ensure reliable, reproducible deployments across environments.",
            "Created powerful Python, Shell, and Perl scripts for system monitoring, log analysis, backups, and automated provisioning using Puppet, streamlining operations in Linux environments.",
            "Set up and maintained Jenkins master/slave architecture, resolved complex build issues, and optimized job performance with detailed metrics and plugin management."
        ]
    }
];const companyButtons = document.querySelectorAll('.company-button');
const projectList = document.getElementById('project-list');

// Function to render selected company job experience
function renderProject(index) {
    const project = projects[index];
    projectList.innerHTML = ''; // Clear existing content

    // Create project details container
    const projectDiv = document.createElement('div');
    projectDiv.style.padding = '20px';
    projectDiv.style.backgroundColor = '#f9f9f9';
    projectDiv.style.borderLeft = `10px solid ${project.color}`;
    projectDiv.style.borderRadius = '5px';

    // Add company logo and details
    const companyLogo = document.createElement('img');
    companyLogo.src = project.companyLogo;
    companyLogo.alt = project.company;
    companyLogo.style.width = '50px';
    companyLogo.style.height = '50px';
    projectDiv.appendChild(companyLogo);

    const companyName = document.createElement('h3');
    companyName.innerText = project.company;
    projectDiv.appendChild(companyName);

    const role = document.createElement('p');
    role.innerText = `${project.role} | ${project.date}`;
    projectDiv.appendChild(role);

    const description = document.createElement('p');
    description.innerText = project.desc;
    projectDiv.appendChild(description);

    // List the description bullets
    const descList = document.createElement('ul');
    descList.style.listStyleType = 'disc';  // Add bullet points to the list
    descList.style.marginLeft = '20px';  // Add some left margin for better indentation

    project.descBullets.forEach(bullet => {
        const listItem = document.createElement('li');
        listItem.innerText = bullet;
        descList.appendChild(listItem);
    });

    projectDiv.appendChild(descList);

    // Append the project div to the project list
    projectList.appendChild(projectDiv);
}

// Handle company button clicks
companyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove the selected class from all buttons
        companyButtons.forEach(btn => {
            btn.classList.remove('selected');
            // Reset the background color of the highlight
            btn.style.setProperty('--highlight-color', 'transparent');
        });

        // Add the selected class to the clicked button
        button.classList.add('selected');

        // Set the company color dynamically
        const companyColor = projects[index].color;
        button.style.setProperty('--highlight-color', companyColor); // Update the highlighter's color

        // Render the job details for the clicked company
        renderProject(index);
    });
});

// Initial render for the first company
renderProject(0);
companyButtons[0].classList.add('selected'); // Mark first company as selected by default
companyButtons[0].style.setProperty('--highlight-color', projects[0].color); // Set the first company color
