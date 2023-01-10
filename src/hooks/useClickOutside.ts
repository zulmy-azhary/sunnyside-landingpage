import { Ref, onMounted, onUnmounted } from "vue";

const useClickOutside = (ref: Ref<HTMLDivElement>, callback: () => void) => {
  const handleClickOutside = (event: Event) => {
    if (ref.value && !ref.value?.contains(event.target as HTMLDivElement)) {
      callback();
    }
  };

  onMounted(() => {
    document.addEventListener("mousedown", handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener("mousedown", handleClickOutside);
  });
};

export default useClickOutside;
