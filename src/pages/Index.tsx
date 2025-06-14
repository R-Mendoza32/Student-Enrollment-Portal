import { useState } from "react";

// Simple icon components
const UserPlus = ({ className = "" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
  </svg>
);

const Users = ({ className = "" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const GraduationCap = ({ className = "" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const FileText = ({ className = "" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

// Local component implementations
interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Card = ({ children, className = "", id }: CardProps) => (
  <div id={id} className={`rounded-lg border bg-white shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

interface InputProps {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  accept?: string;
  readOnly?: boolean;
}

const Input = ({ value = "", onChange, type = "text", required = false, placeholder = "", className = "", accept, readOnly }: InputProps) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    required={required}
    placeholder={placeholder}
    className={`w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors ${className}`}
    accept={accept}
    readOnly={readOnly}
  />
);

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button = ({ children, type = "button", className = "", onClick }: ButtonProps) => (
  <button
    type={type}
    className={`rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-white font-semibold hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 shadow-lg hover:shadow-xl ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);


interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

const Select = ({ value, onValueChange, children, className = "" }: SelectProps) => (
  <select
    value={value}
    onChange={(e) => onValueChange(e.target.value)}
    className={`w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors bg-white ${className}`}
  >
    {children}
  </select>
);

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

const SelectItem = ({ value, children }: SelectItemProps) => (
  <option value={value}>{children}</option>
);

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ children, className = "" }: BadgeProps) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}>
    {children}
  </span>
);

interface CheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  id: string;
  className?: string;
}

const Checkbox = ({ checked, onCheckedChange, id, className = "" }: CheckboxProps) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onChange={(e) => onCheckedChange(e.target.checked)}
    className={`h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${className}`}
  />
);

const yearLevels = ["Grade 11", "Grade 12", "1st Year", "2nd Year", "3rd Year", "4th Year"];
const programs = ["STEM", "ABM", "HUMSS", "BS Computer Science", "BS Information Technology", "BS Education"];
const genders = ["Male", "Female", "Other"];
const civilStatuses = ["Single", "Married", "Widowed", "Separated", "Divorced"];
const studentTypes = ["New", "Transferee", "Returnee"];
const modesOfLearning = ["Face-to-Face", "Online", "Hybrid"];
const enrollmentStatuses = ["Pending", "Approved", "Waitlisted"];
const educationLevels = ["Junior HS", "Senior HS", "College"];

const initialStudents = [];

const enrollmentData = [
  {
    id: "001",
    name: "John Smith",
    program: "BS Computer Science",
    yearLevel: "1st Year",
    status: "Enrolled",
    dateEnrolled: "2025-06-10"
  },
  {
    id: "002",
    name: "Maria Garcia",
    program: "STEM",
    yearLevel: "Grade 11",
    status: "Pending",
    dateEnrolled: "2025-06-12"
  },
  {
    id: "003",
    name: "James Wilson",
    program: "BS Information Technology",
    yearLevel: "2nd Year",
    status: "Enrolled",
    dateEnrolled: "2025-06-11"
  },
  {
    id: "004",
    name: "Sarah Johnson",
    program: "ABM",
    yearLevel: "Grade 12",
    status: "Enrolled",
    dateEnrolled: "2025-06-13"
  },
  {
    id: "005",
    name: "Michael Lee",
    program: "BS Education",
    yearLevel: "3rd Year",
    status: "Pending",
    dateEnrolled: "2025-06-14"
  }
];

const getStatusBadge = (status) => {
  switch (status) {
    case "Approved":
      return <Badge className="bg-green-50 text-green-700">Approved</Badge>;
    case "Pending":
      return <Badge className="bg-yellow-50 text-yellow-700">Pending</Badge>;
    case "Waitlisted":
      return <Badge className="bg-blue-50 text-blue-700">Waitlisted</Badge>;
    default:
      return <Badge className="border border-gray-300">{status}</Badge>;
  }
};

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('enrollment-form')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 mb-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Student <span className="text-blue-600">Enrollment Portal</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Streamline your academic journey with our comprehensive enrollment system
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <Button onClick={scrollToForm} className="bg-blue-600 hover:bg-blue-700 text-md px-6 py-4">
            <UserPlus className="w-4 h-4 mr-2" />
            Start Enrollment
          </Button>
          <Button className="bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 text-md px-6 py-4">
            Learn More
          </Button>
        </div>

        {/* Stats Section - More Compact */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Users className="w-6 h-6 text-blue-600 mb-2 mx-auto" />
            <h3 className="text-xl font-bold text-gray-900">1,200+</h3>
            <p className="text-gray-600 text-sm">Active Students</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <GraduationCap className="w-6 h-6 text-green-600 mb-2 mx-auto" />
            <h3 className="text-xl font-bold text-gray-900">6</h3>
            <p className="text-gray-600 text-sm">Academic Programs</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <FileText className="w-6 h-6 text-purple-600 mb-2 mx-auto" />
            <h3 className="text-xl font-bold text-gray-900">98%</h3>
            <p className="text-gray-600 text-sm">Success Rate</p>
          </div>
        </div>

        {/* Features Section - More Compact */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-left p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Why Choose Our Portal?
            </h2>
            <ul className="space-y-2">
              {[
                "Easy enrollment process",
                "Real-time status tracking",
                "Secure document submission",
                "24/7 platform access",
                "Multiple payment options"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-xl text-white">
            <h2 className="text-xl font-bold mb-2">Ready to Get Started?</h2>
            <p className="text-sm opacity-90">
              Join our academic community today. Complete your enrollment in minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const [students, setStudents] = useState(initialStudents);
  const [form, setForm] = useState({
    // Personal Info
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    gender: "Male",
    dob: "",
    pob: "",
    nationality: "",
    civilStatus: "Single",
    photo: null,
    // Contact Info
    mobile: "",
    email: "",
    homeAddress: "",
    city: "",
    province: "",
    zip: "",
    // Family/Guardian
    fatherName: "",
    fatherOccupation: "",
    fatherContact: "",
    motherName: "",
    motherOccupation: "",
    motherContact: "",
    guardianName: "",
    guardianRelationship: "",
    guardianContact: "",
    // Education
    lastSchool: "",
    schoolAddress: "",
    yearGraduated: "",
    educationLevel: educationLevels[0],
    // Enrollment Details
    schoolYear: "2024-2025",
    semester: "1st Semester",
    yearLevel: yearLevels[0],
    program: programs[0],
    studentType: studentTypes[0],
    modeOfLearning: modesOfLearning[0],
    enrollmentStatus: enrollmentStatuses[0],
    // Consent
    infoAccurate: false,
    agreePrivacy: false,
    dateSubmitted: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field, file) => {
    setForm((prev) => ({ ...prev, [field]: file }));
  };

  const handleCheckbox = (field, checked) => {
    setForm((prev) => ({ ...prev, [field]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.lastName.trim() || !form.infoAccurate || !form.agreePrivacy) return;
    setStudents((prev) => [
      ...prev,
      {
        ...form,
        id: prev.length + 1,
      },
    ]);
    setForm({
      firstName: "",
      middleName: "",
      lastName: "",
      suffix: "",
      gender: "Male",
      dob: "",
      pob: "",
      nationality: "",
      civilStatus: "Single",
      photo: null,
      mobile: "",
      email: "",
      homeAddress: "",
      city: "",
      province: "",
      zip: "",
      fatherName: "",
      fatherOccupation: "",
      fatherContact: "",
      motherName: "",
      motherOccupation: "",
      motherContact: "",
      guardianName: "",
      guardianRelationship: "",
      guardianContact: "",
      lastSchool: "",
      schoolAddress: "",
      yearGraduated: "",
      educationLevel: educationLevels[0],
      schoolYear: "2024-2025",
      semester: "1st Semester",
      yearLevel: yearLevels[0],
      program: programs[0],
      studentType: studentTypes[0],
      modeOfLearning: modesOfLearning[0],
      enrollmentStatus: enrollmentStatuses[0],
      infoAccurate: false,
      agreePrivacy: false,
      dateSubmitted: new Date().toISOString().slice(0, 10),
    });
  };

  const scrollToForm = () => {
    document.getElementById('enrollment-form')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <HeroSection />
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-left">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Student Enrollment Portal</h1>
          <p className="text-gray-600 text-sm">
            Please fill out the form below to enroll a student. Required fields are marked with *.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-sm border bg-gray-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-xs font-semibold text-gray-700">New Enrollments</CardTitle>
              <UserPlus className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent className="pb-3">
              <div className="text-lg font-bold text-gray-900">23</div>
              <p className="text-xs text-gray-600">Today's registrations</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border bg-gray-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-xs font-semibold text-gray-700">Total Enrolled</CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent className="pb-3">
              <div className="text-lg font-bold text-gray-900">1,247</div>
              <p className="text-xs text-gray-600">Students this term</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border bg-gray-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-xs font-semibold text-gray-700">Programs Available</CardTitle>
              <GraduationCap className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent className="pb-3">
              <div className="text-lg font-bold text-gray-900">6</div>
              <p className="text-xs text-gray-600">Academic programs</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border bg-gray-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-xs font-semibold text-gray-700">Requirements</CardTitle>
              <FileText className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent className="pb-3">
              <div className="text-lg font-bold text-gray-900">5</div>
              <p className="text-xs text-gray-600">Documents needed</p>
            </CardContent>
          </Card>
        </div>


        <Card className="shadow-lg border-0" id="enrollment-form">
          <CardContent className="p-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 rounded-lg border">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <span className="text-gray-600">👤</span> Personal Information
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">Basic personal details of the student</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">First Name *</label>
                      <Input value={form.firstName} onChange={e => handleChange("firstName", e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">Middle Name</label>
                      <Input value={form.middleName} onChange={e => handleChange("middleName", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">Last Name *</label>
                      <Input value={form.lastName} onChange={e => handleChange("lastName", e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">Suffix</label>
                      <Input value={form.suffix} onChange={e => handleChange("suffix", e.target.value)} placeholder="Jr., Sr., III, etc." />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">Gender *</label>
                      <Select value={form.gender} onValueChange={v => handleChange("gender", v)}>
                        {genders.map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">Date of Birth *</label>
                      <Input type="date" value={form.dob} onChange={e => handleChange("dob", e.target.value)} required />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">Place of Birth</label>
                      <Input value={form.pob} onChange={e => handleChange("pob", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">Nationality</label>
                      <Input value={form.nationality} onChange={e => handleChange("nationality", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">Civil Status</label>
                      <Select value={form.civilStatus} onValueChange={v => handleChange("civilStatus", v)}>
                        {civilStatuses.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </Select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">Student Photo Upload</label>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={e => handleFileChange("photo", e.target.files?.[0] || null)}
                        value=""
                        className="file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 rounded-lg border">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <span className="text-gray-600">📧</span> Contact Information
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">Contact details and address information</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Mobile Number</label>
                      <Input value={form.mobile} onChange={e => handleChange("mobile", e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
                      <Input type="email" value={form.email} onChange={e => handleChange("email", e.target.value)} />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2 text-gray-700">Home Address</label>
                      <Input value={form.homeAddress} onChange={e => handleChange("homeAddress", e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">City/Municipality</label>
                      <Input value={form.city} onChange={e => handleChange("city", e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Province/State</label>
                      <Input value={form.province} onChange={e => handleChange("province", e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">ZIP/Postal Code</label>
                      <Input value={form.zip} onChange={e => handleChange("zip", e.target.value)} />
                    </div>
                  </div>
                </div>
                {/* Family/Guardian Details */}
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 rounded-lg border">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <span className="text-gray-600">👥</span> Family/Guardian Details
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">Parent and guardian information</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Father's Name</label>
                      <Input value={form.fatherName} onChange={e => handleChange("fatherName", e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Occupation / Contact Number (Father)</label>
                      <Input value={form.fatherOccupation} onChange={e => handleChange("fatherOccupation", e.target.value)} placeholder="Occupation" />
                      <Input className="mt-1" value={form.fatherContact} onChange={e => handleChange("fatherContact", e.target.value)} placeholder="Contact Number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Mother's Name</label>
                      <Input value={form.motherName} onChange={e => handleChange("motherName", e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Occupation / Contact Number (Mother)</label>
                      <Input value={form.motherOccupation} onChange={e => handleChange("motherOccupation", e.target.value)} placeholder="Occupation" />
                      <Input className="mt-1" value={form.motherContact} onChange={e => handleChange("motherContact", e.target.value)} placeholder="Contact Number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Guardian's Name (if different from parents)</label>
                      <Input value={form.guardianName} onChange={e => handleChange("guardianName", e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Relationship to Student</label>
                      <Input value={form.guardianRelationship} onChange={e => handleChange("guardianRelationship", e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Guardian's Contact Number</label>
                      <Input value={form.guardianContact} onChange={e => handleChange("guardianContact", e.target.value)} />
                    </div>
                  </div>
                </div>
                {/* Educational Background */}
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 rounded-lg border">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <span className="text-gray-600">🎓</span> Educational Background
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">Previous education and academic history</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Last School Attended</label>
                      <Input value={form.lastSchool} onChange={e => handleChange("lastSchool", e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">School Address</label>
                      <Input value={form.schoolAddress} onChange={e => handleChange("schoolAddress", e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Year Graduated</label>
                      <Input value={form.yearGraduated} onChange={e => handleChange("yearGraduated", e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Education Level Completed</label>
                      <Select value={form.educationLevel} onValueChange={v => handleChange("educationLevel", v)}>
                        {educationLevels.map(lvl => <SelectItem key={lvl} value={lvl}>{lvl}</SelectItem>)}
                      </Select>
                    </div>
                  </div>
                </div>
                {/* Enrollment Details */}
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 rounded-lg border">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <span className="text-gray-600">📚</span> Enrollment Details
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">Academic program and enrollment preferences</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">School Year / Semester</label>
                      <Input value={form.schoolYear} onChange={e => handleChange("schoolYear", e.target.value)} placeholder="e.g. 2024-2025" />
                      <Input className="mt-1" value={form.semester} onChange={e => handleChange("semester", e.target.value)} placeholder="e.g. 1st Semester" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Grade Level / Year Level</label>
                      <Select value={form.yearLevel} onValueChange={v => handleChange("yearLevel", v)}>
                        {yearLevels.map(lvl => <SelectItem key={lvl} value={lvl}>{lvl}</SelectItem>)}
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Program / Strand / Course</label>
                      <Select value={form.program} onValueChange={v => handleChange("program", v)}>
                        {programs.map(prog => <SelectItem key={prog} value={prog}>{prog}</SelectItem>)}
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Student Type</label>
                      <Select value={form.studentType} onValueChange={v => handleChange("studentType", v)}>
                        {studentTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Mode of Learning</label>
                      <Select value={form.modeOfLearning} onValueChange={v => handleChange("modeOfLearning", v)}>
                        {modesOfLearning.map(mode => <SelectItem key={mode} value={mode}>{mode}</SelectItem>)}
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Enrollment Status</label>
                      <Select value={form.enrollmentStatus} onValueChange={v => handleChange("enrollmentStatus", v)}>
                        {enrollmentStatuses.map(status => <SelectItem key={status} value={status}>{status}</SelectItem>)}
                      </Select>
                    </div>
                  </div>
                </div>
                {/* Consent and Declaration */}
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 rounded-lg border">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <span className="text-gray-600">✓</span> Consent and Declaration
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">Required agreements and submission details</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="infoAccurate" checked={form.infoAccurate} onCheckedChange={v => handleCheckbox("infoAccurate", v)} />
                      <label htmlFor="infoAccurate" className="text-sm">I confirm that all information provided is accurate. *</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="agreePrivacy" checked={form.agreePrivacy} onCheckedChange={v => handleCheckbox("agreePrivacy", v)} />
                      <label htmlFor="agreePrivacy" className="text-sm">I agree to the data privacy policy. *</label>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Date of Submission</label>
                      <Input
                        type="date"
                        value={form.dateSubmitted}
                        readOnly
                        onChange={() => {}}
                        className="bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pt-6 border-t border-gray-200">
                  <Button type="submit" className="text-base min-w-[180px]">
                    🎓 Enroll Student
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

        {/* Enrolled Students Summary Section */}
        <Card>
          <CardHeader>
            <CardTitle>Enrolled Students (Summary)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">ID</th>
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Program</th>
                    <th className="text-left p-2">Year Level</th>
                    <th className="text-left p-2">Status</th>
                    <th className="text-left p-2">Date Enrolled</th>
                  </tr>
                </thead>
                <tbody>
                  {enrollmentData.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-gray-50">
                      <td className="p-2">{student.id}</td>
                      <td className="p-2">{student.name}</td>
                      <td className="p-2">{student.program}</td>
                      <td className="p-2">{student.yearLevel}</td>
                      <td className="p-2">
                        <Badge className={student.status === "Enrolled" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                          {student.status}
                        </Badge>
                      </td>
                      <td className="p-2">{student.dateEnrolled}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Index;
