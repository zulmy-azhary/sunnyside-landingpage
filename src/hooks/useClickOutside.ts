import { onMounted, onUnmounted } from "vue";

const useClickOutside = <T>(ref: T | null, callback: () => void) => {
  const handleClickOutside = (event: Event) => {
    if (ref.value && !ref.value.contains(event.target as T)) {
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
