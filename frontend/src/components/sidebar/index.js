import React from "react";

const Patient = [
  {
    item: "Appointments",
    href: "#appointments",
  },
  {
    item: "Prescriptions",
    href: "#prescriptions",
  },
  {
    item: "Documents",
    href: "#documents",
  },
  {
    item: "Doctors",
    href: "#doctors",
  },
  {
    item: "Profile",
    href: "#profile",
  },
];

const Doctors = [
  {
    item: "Appointments",
    href: "#appointments",
  },
  {
    item: "Upload Reports",
    href: "#uploadReports",
  },
  {
    item: "Patients",
    href: "#patients",
  },

  {
    item: "Profile",
    href: "#profile",
  },
];

const Organization = [
  {
    item: "Doctors",
    href: "#appointments",
  },
  {
    item: "Patients",
    href: "#patients",
  },
  {
    item: "Manage Hospital",
    href: "#manageHospital",
  }
];

const Admin = [
  {
    item: "Manage Hospitals",
    href: "#hospital",
  },
  {
    item: "Hospital Admins",
    href: "#admins",
  },
  
];

const Sidebar = (props) => {

  const patient = props.patient? props.patient : false;
  const doctor = props.doctor? props.doctor : false;
  const organization = props.organization? props.organization : false;
  const admin = props.admin? props.admin : false;

  return (
    <>
      <div className="ml-5 mt-10 bg-white h-screen">
        <aside class="w-56 absolute" aria-label="Sidebar">
          <div class="overflow-y-auto py-4 px-3 border-2 bg-custom-green border-custom-green rounded text-white font-semibold">
            <ul class="space-y-2">
              <li>
                <a
                  href="#dashboard"
                  class="flex items-center p-2 rounded-lg hover:bg-white hover:text-custom-green dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-white transition duration-75 dark:text-white group-hover:text-white dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span class="ml-3">Dashboard</span>
                </a>
              </li>

              {patient &&
                Patient.map((data) => (
                  <li>
                    <a
                      href={data.href}
                      class="flex items-center p-2 rounded-lg hover:bg-white hover:text-custom-green"
                    >
                      {data.item}
                    </a>
                  </li>
                ))}

              {doctor &&
                Doctors.map((data) => (
                  <li>
                    <a
                      href={data.href}
                      class="flex items-center p-2 rounded-lg hover:bg-white hover:text-custom-green"
                    >
                      {data.item}
                    </a>
                  </li>
                ))}

              {organization &&
                Organization.map((data) => (
                  <li>
                    <a
                      href={data.href}
                      class="flex items-center p-2 rounded-lg hover:bg-white hover:text-custom-green"
                    >
                      {data.item}
                    </a>
                  </li>
                ))}

              {admin &&
                Admin.map((data) => (
                  <li>
                    <a
                      href={data.href}
                      class="flex items-center p-2 rounded-lg hover:bg-white hover:text-custom-green"
                    >
                      {data.item}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
