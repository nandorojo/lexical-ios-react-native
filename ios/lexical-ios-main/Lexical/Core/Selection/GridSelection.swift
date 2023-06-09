/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Foundation
import UIKit

public class GridSelection: BaseSelection {
  public var gridKey: NodeKey
  public var anchorCellKey: NodeKey
  public var focusCellKey: NodeKey
  public var dirty: Bool = false

  // MARK: - Init

  public init(gridKey: NodeKey, anchorCellKey: NodeKey, focusCellKey: NodeKey) {
    self.gridKey = gridKey
    self.anchorCellKey = anchorCellKey
    self.focusCellKey = focusCellKey
  }

  public func clone() -> BaseSelection {
    return GridSelection(gridKey: gridKey, anchorCellKey: anchorCellKey, focusCellKey: focusCellKey)
  }

  public func getNodes() throws -> [Node] {
    return []
  }

  public func extract() throws -> [Node] {
    return []
  }
}
