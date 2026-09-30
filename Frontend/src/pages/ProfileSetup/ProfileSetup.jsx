import { Link } from "react-router";
import Navbar from "../../components/common/Navbar";

function ProfileSetup() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar showNavigation={false} />

      <main className="px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto w-full max-w-2xl">
          {/* Heading */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 sm:text-sm dark:text-blue-400">
              Almost there
            </p>

            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-3xl lg:text-4xl dark:text-white">
              Set up your academic profile
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 dark:text-slate-400">
              Tell us about your academic details so SLIETPrep can show you the
              subjects and question papers relevant to you.
            </p>
          </div>

          {/* Form card */}
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:mt-10 sm:rounded-2xl sm:p-8 dark:border-slate-800 dark:bg-slate-900">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Degree Type */}
              <div>
                <label
                  htmlFor="degreeType"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Degree Type
                </label>

                <select
                  id="degreeType"
                  defaultValue=""
                  className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 sm:px-4 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                >
                  <option value="" disabled>
                    Select degree type
                  </option>

                  <option value="btech">B.Tech</option>
                  <option value="diploma">Diploma</option>
                </select>
              </div>

              {/* Branch */}
              <div>
                <label
                  htmlFor="branch"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Branch
                </label>

                <select
                  id="branch"
                  defaultValue=""
                  className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 sm:px-4 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                >
                  <option value="" disabled>
                    Select branch
                  </option>

                  <option value="cse">Computer Science & Engineering</option>

                  <option value="ece">
                    Electronics & Communication Engineering
                  </option>

                  <option value="ee">Electrical Engineering</option>

                  <option value="me">Mechanical Engineering</option>

                  <option value="ce">Civil Engineering</option>
                </select>
              </div>

              {/* Year */}
              <div>
                <label
                  htmlFor="year"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Year
                </label>

                <select
                  id="year"
                  defaultValue=""
                  className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 sm:px-4 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                >
                  <option value="" disabled>
                    Select year
                  </option>

                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>

              {/* Semester */}
              <div>
                <label
                  htmlFor="semester"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Semester
                </label>

                <select
                  id="semester"
                  defaultValue=""
                  className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 sm:px-4 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                >
                  <option value="" disabled>
                    Select semester
                  </option>

                  <option value="1">Semester 1</option>
                  <option value="2">Semester 2</option>
                  <option value="3">Semester 3</option>
                  <option value="4">Semester 4</option>
                  <option value="5">Semester 5</option>
                  <option value="6">Semester 6</option>
                  <option value="7">Semester 7</option>
                  <option value="8">Semester 8</option>
                </select>
              </div>
            </div>

            {/* Continue */}
            <button
              type="button"
              className="mt-7 h-12 w-full rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700 sm:mt-8 sm:text-base"
            >
              Continue to Dashboard
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-500 sm:text-sm dark:text-slate-400">
              You can update these details later from your profile.
            </p>
          </div>

          {/* Back */}
          <div className="mt-5 text-center sm:mt-6">
            <Link
              to="/signup"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              ← Back to signup
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfileSetup;
