package expo.modules.material3alert

import com.google.android.material.dialog.MaterialAlertDialogBuilder
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class Material3AlertModule : Module() {

  override fun definition() = ModuleDefinition {

    Name("Material3Alert")

    Function("show") {
      MaterialAlertDialogBuilder(appContext.reactContext!!.applicationContext)
        .setTitle("This is an alert!")
        .show()
    }
  }
}
