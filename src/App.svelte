<script lang="ts">
  import { Router, Link, Route, navigate } from "svelte-routing";
  import Login from "./pages/Login.svelte";
  import Home from "./pages/Home.svelte";
  import { onMount } from "svelte";
  import Signup from "./pages/Signup.svelte";
  import ShowScholarships from "./pages/ShowScholarships.svelte";
  import Scholarship from "./pages/Scholarship.svelte";
  import Contact from "./pages/Contact.svelte";
  import About from "./pages/About.svelte";
  import Find from "./pages/Find.svelte";
  import Exam from "./pages/Exam.svelte";
  import ShowExams from "./pages/ShowExams.svelte";
  import SingleExam from "./pages/SingleExam.svelte";
  import Form from "./pages/Form.svelte";
  import Success from "./pages/Success.svelte";
  import { SvelteToast } from "@zerodevx/svelte-toast";
  import Profile from "./components/Dairy/Profile.svelte";
  import DoctorsNearby from "./components/Dairy/DoctorsNearby.svelte";
  import VaccineChart from "./components/Dairy/VaccineChart.svelte";
  import BookingSuccess from "./components/Dairy/BookingSuccess.svelte";
  import Appointments from "./components/Dairy/Appointments.svelte";
  import AllCases from "./components/Dairy/AllCases.svelte";
  import DoctorProfile from "./components/Dairy/DoctorProfile.svelte";
  export let url = "/";

  onMount(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    } else {
      navigate("/home");
    }
  });
</script>

<Router {url}>
  <div class="h-[100vh]">
    <SvelteToast />
    <Route path="/login" component={Login} />
    <!-- <Route path="/home" component={Home} /> -->
    <Route path="/signup" component={Signup} />
    <Route path="/showscholarships" component={ShowScholarships} />
    <Route path="/home" component={Home} />
    <Route path="/scholarship/:id" let:params>
      <Scholarship id={params.id} />
    </Route>
    <Route path="/exam/:id" let:params>
      <SingleExam id={params.id} />
    </Route>
    <!-- <Route path="/contact" component={Contact} /> -->
    <!-- <Route path="/about" component={About} /> -->
    <Route path="/find" component={Find} />
    <Route path="/exams" component={Exam} />
    <Route path="/showexams" component={ShowExams} />
    <Route path="/instant-medicare" component={Form} />
    <Route path="/successcaseupload" component={Success} />
    <Route path="/profile" component={Profile} />
    <Route path="/doctors-nearby" component={DoctorsNearby} />
    <Route path="/vaccine-chart" component={VaccineChart} />
    <Route path="/booking-success" component={BookingSuccess} />
    <Route path="/appointments" component={Appointments} />
    <Route path="/cases" component={AllCases} />
    <Route path="/doctor/:id" let:params>
      <DoctorProfile doctorId={params.id} />
    </Route>
  </div>
</Router>
