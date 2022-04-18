<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/ads/googleads/v9/services/ad_service.proto

namespace Google\Ads\GoogleAds\V9\Services;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * The result for the ad mutate.
 *
 * Generated from protobuf message <code>google.ads.googleads.v9.services.MutateAdResult</code>
 */
class MutateAdResult extends \Google\Protobuf\Internal\Message
{
    /**
     * The resource name returned for successful operations.
     *
     * Generated from protobuf field <code>string resource_name = 1;</code>
     */
    protected $resource_name = '';
    /**
     * The mutated ad with only mutable fields after mutate. The field will only
     * be returned when response_content_type is set to "MUTABLE_RESOURCE".
     *
     * Generated from protobuf field <code>.google.ads.googleads.v9.resources.Ad ad = 2;</code>
     */
    protected $ad = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $resource_name
     *           The resource name returned for successful operations.
     *     @type \Google\Ads\GoogleAds\V9\Resources\Ad $ad
     *           The mutated ad with only mutable fields after mutate. The field will only
     *           be returned when response_content_type is set to "MUTABLE_RESOURCE".
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Ads\GoogleAds\V9\Services\AdService::initOnce();
        parent::__construct($data);
    }

    /**
     * The resource name returned for successful operations.
     *
     * Generated from protobuf field <code>string resource_name = 1;</code>
     * @return string
     */
    public function getResourceName()
    {
        return $this->resource_name;
    }

    /**
     * The resource name returned for successful operations.
     *
     * Generated from protobuf field <code>string resource_name = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setResourceName($var)
    {
        GPBUtil::checkString($var, True);
        $this->resource_name = $var;

        return $this;
    }

    /**
     * The mutated ad with only mutable fields after mutate. The field will only
     * be returned when response_content_type is set to "MUTABLE_RESOURCE".
     *
     * Generated from protobuf field <code>.google.ads.googleads.v9.resources.Ad ad = 2;</code>
     * @return \Google\Ads\GoogleAds\V9\Resources\Ad|null
     */
    public function getAd()
    {
        return $this->ad;
    }

    public function hasAd()
    {
        return isset($this->ad);
    }

    public function clearAd()
    {
        unset($this->ad);
    }

    /**
     * The mutated ad with only mutable fields after mutate. The field will only
     * be returned when response_content_type is set to "MUTABLE_RESOURCE".
     *
     * Generated from protobuf field <code>.google.ads.googleads.v9.resources.Ad ad = 2;</code>
     * @param \Google\Ads\GoogleAds\V9\Resources\Ad $var
     * @return $this
     */
    public function setAd($var)
    {
        GPBUtil::checkMessage($var, \Google\Ads\GoogleAds\V9\Resources\Ad::class);
        $this->ad = $var;

        return $this;
    }

}

