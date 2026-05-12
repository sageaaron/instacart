import { XIcon } from "lucide-react";

const AddressForm = ({
  resetForm,
  handleSubmit,
  form,
  setForm,
  editingId,
}: any) => {
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-50" />

      {/* Form Container */}
      <div onClick={resetForm} className="fixed inset-0 z-50 flex-center p-4">
        <form
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 w-full max-w-lg animate-fade-in"
        >
          {/* Form Header */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold text-app-green">
              {editingId ? "Edit Address" : "Add A New Address"}
            </h2>
            <button
              type="button"
              onClick={resetForm}
              className="p-2 hover:bg-app-cream rounded-lg"
            >
              <XIcon className="size-5" />
            </button>
          </div>

          {/* Form Input Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-app-green mb-1.5">
                Label
              </label>
              <input
                type="text"
                placeholder="Home, Work, etc"
                required
                value={form.label}
                onChange={(e) => setForm({ ...form, label: e.target.value })}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-app-green mb-1.5">
                Street Address
              </label>
              <input
                type="text"
                placeholder="123 Example Road"
                required
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-app-green mb-1.5">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Sandton"
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-app-green mb-1.5">
                  Province
                </label>
                <input
                  type="text"
                  placeholder="Gauteng"
                  required
                  value={form.province}
                  onChange={(e) =>
                    setForm({ ...form, province: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-app-green mb-1.5">
                  Zip Code
                </label>
                <input
                  type="text"
                  placeholder="1234"
                  required
                  value={form.zip}
                  onChange={(e) => setForm({ ...form, zip: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none"
                />
              </div>

              <div className="flex items-end pb-1">
                <label className="flex items-center gap-2 cursor-pointer mb-1.5 ml-1">
                  <input
                    type="checkbox"
                    checked={form.isDefault}
                    onChange={(e) =>
                      setForm({ ...form, isDefault: e.target.checked })
                    }
                  />
                  <span className="text-sm text-app-text">Set As Default</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="mt-6 w-full py-3 bg-app-green text-white font-semibold rounded-xl hover:bg-app-green-light transition-colors"
          >
            {editingId ? "Update Address" : "Save Address"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddressForm;
