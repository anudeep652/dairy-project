<script lang="ts">
  import { Camera, CameraResultType } from "@capacitor/camera";
  import DropFileIcon from "../../assets/DropFileIcon.svelte";
  let DoctorData = {
    name: "",
    address: "",
    city: "",
    pincode: "",
    email: "",
    phone: "",
    photo: "",
    doctorCertificate: "",
    aadhar: "",
    degree: "",
    profession: "",
    availabilityTime: "",
    noOfDaysAvailable: "",
    clinicAddress: "",
    clinicCity: "",
    clinicPincode: "",
    password: "",
    confirmPassword: "",
  };
  export let data: typeof DoctorData;
  export let field: keyof typeof DoctorData;
  async function addImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      width: screen.width * 1.5,
      height: screen.height * 1.5,
      saveToGallery: true,
      resultType: CameraResultType.DataUrl,
    });
    data[field] = image.dataUrl!;
  }
</script>

<label
  for="dropzone-file"
  class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
>
  <div class="flex flex-col justify-center items-center pt-5 pb-6">
    <DropFileIcon />
    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
      <span class="font-semibold">Click to add photos</span>
    </p>
  </div>
  <input
    id="dropzone-file"
    type="button"
    class="hidden"
    on:click={() => addImage()}
  />
</label>
