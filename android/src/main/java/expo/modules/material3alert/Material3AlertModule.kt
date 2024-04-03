package expo.modules.material3alert

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class Material3AlertModule : Module() {

  override fun definition() = ModuleDefinition {

    Name("Material3Alert")

    Function("show") {
      "Hello world! 👋"
    }
  }
}
