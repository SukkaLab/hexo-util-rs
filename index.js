const Cache = require('./common/cache')
const { isExternalLink: isExternalLinkRs, slugize, stripTags, encodeUrl } = require('./utils')

const externalLinkCache = new Cache()

module.exports.isExternalLink = function isExternalLink(input, sitehost, exclude) {
  // Fast path: return false early for internal link
  // This does not involve costly operations like URL parsing or FFI interop.
  if (!/^(\/\/|http(s)?:)/.test(input)) return false

  return externalLinkCache.apply(`${input}-${sitehost}-${exclude}`, () => {
    // Slow path: call Rust implementation for better URL parsing performance.
    return isExternalLinkRs(input, sitehost, exclude)
  })
}

module.exports.encodeUrl = encodeUrl
switch (platform) {
  case 'android':
    switch (arch) {
      case 'arm64':
        localFileExisted = existsSync(join(__dirname, 'hexo-util.android-arm64.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./hexo-util.android-arm64.node')
          } else {
            nativeBinding = require('@sukka/hexo-util-rs-android-arm64')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm':
        localFileExisted = existsSync(join(__dirname, 'hexo-util.android-arm-eabi.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./hexo-util.android-arm-eabi.node')
          } else {
            nativeBinding = require('@sukka/hexo-util-rs-android-arm-eabi')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Android ${arch}`)
    }
    break
  case 'win32':
    switch (arch) {
      case 'x64':
        localFileExisted = existsSync(join(__dirname, 'hexo-util.win32-x64-msvc.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./hexo-util.win32-x64-msvc.node')
          } else {
            nativeBinding = require('@sukka/hexo-util-rs-win32-x64-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'ia32':
        localFileExisted = existsSync(join(__dirname, 'hexo-util.win32-ia32-msvc.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./hexo-util.win32-ia32-msvc.node')
          } else {
            nativeBinding = require('@sukka/hexo-util-rs-win32-ia32-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm64':
        localFileExisted = existsSync(join(__dirname, 'hexo-util.win32-arm64-msvc.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./hexo-util.win32-arm64-msvc.node')
          } else {
            nativeBinding = require('@sukka/hexo-util-rs-win32-arm64-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Windows: ${arch}`)
    }
    break
  case 'darwin':
    switch (arch) {
      case 'x64':
        localFileExisted = existsSync(join(__dirname, 'hexo-util.darwin-x64.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./hexo-util.darwin-x64.node')
          } else {
            nativeBinding = require('@sukka/hexo-util-rs-darwin-x64')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm64':
        localFileExisted = existsSync(join(__dirname, 'hexo-util.darwin-arm64.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./hexo-util.darwin-arm64.node')
          } else {
            nativeBinding = require('@sukka/hexo-util-rs-darwin-arm64')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on macOS: ${arch}`)
    }
    break
  case 'freebsd':
    if (arch !== 'x64') {
      throw new Error(`Unsupported architecture on FreeBSD: ${arch}`)
    }
    localFileExisted = existsSync(join(__dirname, 'hexo-util.freebsd-x64.node'))
    try {
      if (localFileExisted) {
        nativeBinding = require('./hexo-util.freebsd-x64.node')
      } else {
        nativeBinding = require('@sukka/hexo-util-rs-freebsd-x64')
      }
    } catch (e) {
      loadError = e
    }
    break
  case 'linux':
    switch (arch) {
      case 'x64':
        if (isMusl()) {
          localFileExisted = existsSync(join(__dirname, 'hexo-util.linux-x64-musl.node'))
          try {
            if (localFileExisted) {
              nativeBinding = require('./hexo-util.linux-x64-musl.node')
            } else {
              nativeBinding = require('@sukka/hexo-util-rs-linux-x64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(join(__dirname, 'hexo-util.linux-x64-gnu.node'))
          try {
            if (localFileExisted) {
              nativeBinding = require('./hexo-util.linux-x64-gnu.node')
            } else {
              nativeBinding = require('@sukka/hexo-util-rs-linux-x64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 'arm64':
        if (isMusl()) {
          localFileExisted = existsSync(join(__dirname, 'hexo-util.linux-arm64-musl.node'))
          try {
            if (localFileExisted) {
              nativeBinding = require('./hexo-util.linux-arm64-musl.node')
            } else {
              nativeBinding = require('@sukka/hexo-util-rs-linux-arm64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(join(__dirname, 'hexo-util.linux-arm64-gnu.node'))
          try {
            if (localFileExisted) {
              nativeBinding = require('./hexo-util.linux-arm64-gnu.node')
            } else {
              nativeBinding = require('@sukka/hexo-util-rs-linux-arm64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 'arm':
        localFileExisted = existsSync(join(__dirname, 'hexo-util.linux-arm-gnueabihf.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./hexo-util.linux-arm-gnueabihf.node')
          } else {
            nativeBinding = require('@sukka/hexo-util-rs-linux-arm-gnueabihf')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Linux: ${arch}`)
    }
    break
  default:
    throw new Error(`Unsupported OS: ${platform}, architecture: ${arch}`)
}

if (!nativeBinding) {
  if (loadError) {
    throw loadError
  }
  throw new Error(`Failed to load native binding`)
}

const { slugize, stripTags } = nativeBinding

module.exports.slugize = slugize
module.exports.stripTags = stripTags
