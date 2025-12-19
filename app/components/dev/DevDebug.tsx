"use client";

// Next
import { Link } from "@/i18n/navigation";

// RHF
import { useFormContext } from "react-hook-form";

// Component
import { BaseButton } from "@/app/components";

// Variables
import { FORM_FILL_VALUES } from "@/lib/variables";

type DevDebugProps = {};

// Toggle this when you want to see the panel in development
const ENABLE_DEV_DEBUG = false;

const DevDebug = ({}: DevDebugProps) => {
  // Never show in production
  if (process.env.NODE_ENV !== "development") return null;

  // Also hide in dev unless you explicitly enable it
  if (!ENABLE_DEV_DEBUG) return null;

  const { reset, formState } = useFormContext();

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex gap-4 rounded-md border-2 border-red-500 bg-white/90 p-3 shadow-lg backdrop-blur">
      <div className="flex flex-col gap-2">
        <b>DEV:</b>
        <div>Form: {formState.isDirty ? "Dirty" : "Clean"}</div>

        <BaseButton
          tooltipLabel="Form Test Fill"
          variant="outline"
          onClick={() => reset(FORM_FILL_VALUES)}
        >
          Fill in the form
        </BaseButton>
      </div>

      <div className="flex flex-col gap-1">
        <Link href={`/template/1`}>Template 1</Link>
        <Link href={`/template/2`}>Template 2</Link>
      </div>
    </div>
  );
};

export default DevDebug;
